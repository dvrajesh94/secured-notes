import ReactNative from 'react-native';
import I18n, {getLanguages} from 'react-native-i18n';

import memoize from 'lodash.memoize';

console.log('memoize??', memoize);

// Import all locales
import te from '../locales/te.json'; // Telugu
import en from '../locales/en.json'; // English

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  te,
  en,
};

// console.log('getLocales', I18n.translations);

getLanguages().then(languages => {
  console.log('hererere', languages); // ['en-US', 'en']
});

const currentLocale = I18n.currentLocale();

// Is it a RTL language?
export const isRTL =
  currentLocale.indexOf('he') === 0 || currentLocale.indexOf('ar') === 0;

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return I18n.t(name, params);
}

export default I18n;
