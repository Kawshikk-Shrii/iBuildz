import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import ta from './locales/ta/translation.json';
import te from './locales/te/translation.json';
import ur from './locales/ur/translation.json';

i18n
  .use(initReactI18next).init({
  resources: {
    en: {translation: translationEN,},
    ta: {translation: ta},
    te: {translation: te},
    ur: {translation: ur,},
  },
    fallbackLng: 'en',
    interpolation: { 
        escapeValue: false,
        },
  })

export default i18n;