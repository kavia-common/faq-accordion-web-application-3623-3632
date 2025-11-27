export const faqs = [
  {
    id: 'faq-1',
    question: 'What is an accordion component?',
    answer:
      'An accordion is a vertically stacked list of items where each item can be expanded to reveal more content. It helps keep interfaces tidy by showing only what is necessary.',
  },
  {
    id: 'faq-2',
    question: 'Is this accordion accessible?',
    answer:
      'Yes. Each header is a real button with aria-expanded, aria-controls, and the content region uses role="region" with appropriate labeling. Keyboard users can toggle with Enter or Space.',
  },
  {
    id: 'faq-3',
    question: 'Can multiple items be open at once?',
    answer:
      'By default, only one item is open at a time. You can enable multi-open behavior by passing multiOpen to the Accordion component.',
  },
  {
    id: 'faq-4',
    question: 'How do I add new FAQ items?',
    answer:
      'Open src/data/faqs.js and add a new object with a unique id, question, and answer to the exported array. The UI will update automatically.',
  },
  {
    id: 'faq-5',
    question: 'Does it respect reduced motion settings?',
    answer:
      'Yes. If a user has prefers-reduced-motion enabled, animations and transitions are minimized for a more comfortable experience.',
  },
];

export default faqs;
