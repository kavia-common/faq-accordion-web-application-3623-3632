import React, { useState, useEffect } from 'react';
import './App.css';
import Accordion from './components/Accordion';
import faqs from './data/faqs';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Apply theme to document for [data-theme] CSS variable switching
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <header className="page-header gradient-surface">
        <div className="container">
          <div className="header-top">
            <h1 className="title">FAQs</h1>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>
          <p className="subtitle">
            Find answers to the most common questions. Click a question to reveal the answer.
          </p>
        </div>
      </header>

      <main className="container main">
        <section aria-label="Frequently Asked Questions">
          <div className="card surface shadow rounded">
            <Accordion
              items={faqs}
              multiOpen={false}
              defaultOpenIds={[faqs[0]?.id].filter(Boolean)}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
