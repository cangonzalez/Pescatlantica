'use client';

import { useEffect, useState } from 'react';

const languages = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' },
];

export default function LanguageSelector() {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'es',
          includedLanguages: 'es,en,pt',
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    if (!document.querySelector('script[src*="translate_a/element.js"]')) {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleChange = (event) => {
    const nextLanguage = event.target.value;
    setLanguage(nextLanguage);

    const combo = document.querySelector('.goog-te-combo');
    if (combo) {
      combo.value = nextLanguage;
      combo.dispatchEvent(new Event('change'));
    }
  };

  return (
    <div className="language-selector">
      <label htmlFor="language-select">Idioma</label>
      <select id="language-select" value={language} onChange={handleChange}>
        {languages.map((item) => (
          <option key={item.code} value={item.code}>
            {item.label}
          </option>
        ))}
      </select>
      <div id="google_translate_element" aria-hidden="true" />
    </div>
  );
}
