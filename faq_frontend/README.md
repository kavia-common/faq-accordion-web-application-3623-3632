# Lightweight React Template for KAVIA

This project provides a minimal React template with a clean, modern UI and minimal dependencies.

Now includes an accessible FAQ Accordion with the Ocean Professional theme.

## FAQ Data

Add or edit FAQs in:
- `src/data/faqs.js`

Each item has:
```js
{ id: 'unique-id', question: 'Question text', answer: 'Answer text' }
```

## Accordion Component

Location:
- `src/components/Accordion.jsx`

Props:
- `items` (array): [{ id, question, answer }]
- `multiOpen` (boolean): allow multiple open at once (default: false)
- `defaultOpenIds` (string[]): ids to be open initially (optional)
- `className` (string): additional class names

Accessibility:
- Header is a button with `aria-expanded` and `aria-controls`
- Panel uses `role="region"` with `aria-labelledby`
- Keyboard: Enter/Space toggle

## Theme

Ocean Professional theme is implemented with CSS variables in `src/App.css`.
Light and dark variants are supported via the `data-theme` attribute on `<html>`.
Use the toggle button in the UI to switch modes.

## Scripts

- `npm start` - start dev server on http://localhost:3000
- `npm test` - run tests
- `npm run build` - production build
