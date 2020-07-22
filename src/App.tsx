import React from 'react';
import {Provider} from 'react-redux';

import './App.sass';
import {store} from './store'
import AppRouter from './router';
import {I18nextProvider, initReactI18next} from 'react-i18next';
import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import common_es from './translations/es/common.json';
import common_en from './translations/en/common.json';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        interpolation: {escapeValue: false},  // React already does escaping
        detection: {
            // order and from where user language should be detected
            order: ['navigator', 'cookie', 'localStorage', 'sessionStorage'],

            // keys or params to lookup language from
            lookupQuerystring: 'lng',
            lookupCookie: 'i18next',
            lookupLocalStorage: 'i18nextLng',
            lookupFromPathIndex: 0,
            lookupFromSubdomainIndex: 0,

            // cache user language on
            caches: ['localStorage', 'cookie'],
        },
        resources: {
            en: {
                common: common_en               // 'common' is our custom namespace
            },
            es: {
                common: common_es
             },
        },
    })

const App: React.FC = () => {

    return (
        <I18nextProvider i18n={i18next}>
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        </I18nextProvider>
    )
}
export default App;