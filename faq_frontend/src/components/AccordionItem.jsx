import React, { useCallback } from 'react';

/**
 * PUBLIC_INTERFACE
 * AccordionItem
 * Single item within an accordion, containing a header button and a content panel.
 *
 * Props:
 * - id: string
 * - question: string
 * - answer: string
 * - isOpen: boolean
 * - onToggle: () => void
 * - headerId?: string
 * - panelId?: string
 * - index?: number
 */
function AccordionItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
  headerId,
  panelId,
  index,
}) {
  const handleKeyDown = useCallback(
    (e) => {
      // Enter or Space toggles; buttons already handle Enter/Space by default,
      // but we safeguard behavior to ensure consistent operation.
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onToggle();
      }
    },
    [onToggle]
  );

  return (
    <div className="accordion-item surface shadow rounded">
      <h3 className="accordion-header">
        <button
          id={headerId}
          className="accordion-button focus-ring"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          onKeyDown={handleKeyDown}
        >
          <span className="accordion-question">{question}</span>
          <span
            className={`accordion-icon ${isOpen ? 'open' : ''}`}
            aria-hidden="true"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        className={`accordion-content ${isOpen ? 'open' : ''}`}
      >
        <div className="accordion-content-inner text-body">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
