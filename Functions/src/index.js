import {resetBannerMessage, showErrorBanner, showWarningBanner, showSuccessBanner} from './Banners';
import {digestToHex, genUUID} from './Crypto';
import {getStateOptions, getMiniStateOptions} from './States';
import {testEmail, testPhone, testZip} from './Tests';
import {getParam} from './URLTools';

export const Banners = {resetBannerMessage, showErrorBanner, showWarningBanner, showSuccessBanner};
export const Crypto = {digestToHex, genUUID};
export const States = {getStateOptions, getMiniStateOptions};
export const Tests = {testEmail, testPhone, testZip};
export const URLTools = {getParam};
