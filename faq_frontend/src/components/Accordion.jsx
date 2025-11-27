import React, { useCallback, useMemo, useState } from 'react';
import AccordionItem from './AccordionItem';

/**
 * PUBLIC_INTERFACE
 * Accordion
 * A reusable, accessible accordion component.
 *
 * Props:
 * - items: Array<{ id: string, question: string, answer: string }>
 * - multiOpen?: boolean (default false)
 * - defaultOpenIds?: string[] (optional)
 * - className?: string (optional)
 */
function Accordion({ items = [], multiOpen = false, defaultOpenIds = [], className = '' }) {
  // Internal open state; if defaultOpenIds provided use them initially
  const [openIds, setOpenIds] = useState(() => new Set(defaultOpenIds));

  const isOpen = useCallback(
    (id) => openIds.has(id),
    [openIds]
  );

  const handleToggle = useCallback(
    (id) => {
      setOpenIds((prev) => {
        const next = new Set(prev);
        const currentlyOpen = next.has(id);
        if (multiOpen) {
          if (currentlyOpen) {
            next.delete(id);
          } else {
            next.add(id);
          }
        } else {
          // single open mode
          if (currentlyOpen) {
            next.delete(id);
          } else {
            next.clear();
            next.add(id);
          }
        }
        return next;
      });
    },
    [multiOpen]
  );

  const renderedItems = useMemo(
    () =>
      items.map((it, idx) => (
        <AccordionItem
          key={it.id}
          id={it.id}
          question={it.question}
          answer={it.answer}
          isOpen={isOpen(it.id)}
          onToggle={() => handleToggle(it.id)}
          // Provide unique ids for aria attributes inside the item
          headerId={`acc-header-${it.id}`}
          panelId={`acc-panel-${it.id}`}
          index={idx}
        />
      )),
    [items, isOpen, handleToggle]
  );

  return (
    <div className={`accordion ${className}`} role="presentation">
      {renderedItems}
    </div>
  );
}

export default Accordion;
