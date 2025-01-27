import Tour from './classes/Tour';
import {AutoComplete} from './components/AutoComplete/AutoComplete';
import {InfiniteScrollTable} from './components/InfiniteScrollTable/InfiniteScrollTable';
import {IntegerInput} from './components/Inputs/IntegerInput';
import {NumericInput} from './components/Inputs/NumericInput';
import {states, getStateOptions, getMiniStateOptions} from './components/Inputs/States';
import {Modal} from './components/Modal/Modal';
import {Popover} from './components/Popover/Popover';
import {BannerMessage, resetBannerMessage, showSuccessBanner, showWarningBanner,
  showErrorBanner} from './functions/BannerMessages';
import {digestToHex, genUUID} from './functions/Crypto';
import {getParam} from './functions/URLTools';

export const Classes = {
  Tour,
};

export const Components = {
  AutoComplete, InfiniteScrollTable, IntegerInput, NumericInput, Modal, Popover, BannerMessage
};

export const Functions = {
  Banners: {resetBannerMessage, showSuccessBanner, showWarningBanner, showErrorBanner},
  Builders: {getStateOptions, getMiniStateOptions},
  Crypto: {digestToHex, genUUID},
  URLTools: {getParam},
};

export const Data = {states};
