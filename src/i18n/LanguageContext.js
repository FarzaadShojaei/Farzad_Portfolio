import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import translations from './translations';

const LanguageContext = createContext({
  lang: 'en',
  t: translations.en,
  toggleLang: () => {},
  setLang: () => {},
});

const STORAGE_KEY = 'portfolio-lang';

const getInitialLang = () => {
  // Default language is ALWAYS English. Only a previous explicit choice by the
  // user (persisted in localStorage) overrides this default.
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'it') return saved;
  } catch (e) {
    // localStorage may be unavailable (e.g. private mode) — fall back to English
  }
  return 'en';
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(getInitialLang);

  const setLang = useCallback((next) => {
    setLangState(next === 'it' ? 'it' : 'en');
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === 'en' ? 'it' : 'en'));
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // ignore write failures
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const value = {
    lang,
    t: translations[lang],
    toggleLang,
    setLang,
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
