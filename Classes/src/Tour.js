import {TourGuideClient} from '@sjmc11/tourguidejs';

export class Tour {
  /**
   * Constructor.
   * @param tourName {String} Must be unique across all tours. A prefix is recommended
   */
  constructor(tourName) {
    if (!tourName) {
      throw new Error('tourName argument is required');
    }

    /** @param {String} */
    this.tourName = tourName;

    /** @type {Array.<{target: String|HTMLElement, title: String, content: String, order: Number}>} */
    this.steps = [];
  };

  /**
   * Add a step to the tour. Steps will be rendered in the order they are added
   * @param {null|String|HTMLElement} target
   * @param {String} title
   * @param {String} content
   */
  addStep = (target, title, content) => {
    this.steps.push({
      target,
      title,
      content,
      order: this.steps.length + 1
    });
  };

  /**
   * Add multiple steps to the tour. Steps will be rendered in the order they are added
   * @param {Array.<{target: null|String|HTMLElement, title: String, content: String}>} steps
   */
  addSteps = (steps) => {
    steps.forEach((step) => {
      this.steps.push({
        target: step.target,
        title: step.title,
        content: step.content,
        order: this.steps.length + 1,
      });
    });
  };

  /**
   * Begin the tour
   * @returns {Promise<unknown>}
   */
  start = async () => {
    if (this.steps.length < 1) {
      throw new Error('Tour has no steps. At least one is required.');
    }

    // If this tour has run before, do not run it again
    if (localStorage.getItem(`${this.tourName}`)) {
      return;
    }

    // Create the overlay for the tour
    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.zIndex = '998';

    const tour = new TourGuideClient({
      exitOnClickOutside: false,
      backdropColor: 'rgba(0, 0, 0, 0.3)',
      completeOnFinish: false,
      steps: this.steps,
      debug: true,
    });

    // If the user completes the tour or manually closes it, do not show the tour again
    tour.onBeforeExit(() => {
      localStorage.setItem(`${this.tourName}`, '1');

      // Clean up the DOM
      document.body.removeChild(overlay);
      const builtinBackdrop = document.querySelector('.tg-backdrop');
      if (builtinBackdrop) {
        builtinBackdrop.parentElement.removeChild(builtinBackdrop);
      }
      const builtinModal = document.querySelector('.tg-dialog');
      if (builtinModal) {
        builtinModal.parentElement.removeChild(builtinModal);
      }
    });

    // Start the tour
    document.body.appendChild(overlay);
    return tour.start();
  }
}
