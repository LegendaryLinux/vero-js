export interface TourStep {
  target: string | HTMLElement | null;
  title: string;
  content: string;
}

export class Tour {
  /**
   * Must be unique across all tours. A prefix is recommended.
   */
  public tourName: string;

  /**
   * The list of steps added to the tour.
   */
  public steps: Array<TourStep & { order: number }>;

  /**
   * @param tourName Must be unique across all tours. A prefix is recommended.
   */
  constructor(tourName: string);

  /**
   * Add a step to the tour.
   */
  public addStep(target: string | HTMLElement | null, title: string, content: string): void;

  /**
   * Add multiple steps to the tour.
   */
  public addSteps(steps: TourStep[]): void;

  /**
   * Begin the tour. Does nothing if the tour has been completed before.
   */
  public start(): Promise<void>;
}
