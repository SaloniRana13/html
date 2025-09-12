import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Default language: English
  const [lang, setLang] = useState('en');

  const toggleLanguage = () => setLang(prev => (prev === 'en' ? 'hi' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
