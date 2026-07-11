import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const LANGS = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
];

const LanguageDropdown = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const handleKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  const current = LANGS.find((l) => l.code === lang) || LANGS[0];

  const choose = (code) => {
    setLang(code);
    setOpen(false);
  };

  return (
    <div className="lang-dropdown" ref={ref}>
      <button
        type="button"
        className="lang-dropdown-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
      >
        <span className="lang-globe" aria-hidden="true">🌐</span>
        <span className="lang-current-flag" aria-hidden="true">{current.flag}</span>
        <span className="lang-current-label">{current.label}</span>
        <span className={`lang-chevron ${open ? 'up' : ''}`} aria-hidden="true">▾</span>
      </button>

      {open && (
        <ul className="lang-dropdown-menu" role="listbox" aria-label="Language">
          {LANGS.map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === lang}>
              <button
                type="button"
                className={`lang-option ${l.code === lang ? 'active' : ''}`}
                onClick={() => choose(l.code)}
              >
                <span className="lang-option-flag" aria-hidden="true">{l.flag}</span>
                <span className="lang-option-label">{l.label}</span>
                {l.code === lang && <span className="lang-check" aria-hidden="true">✓</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
