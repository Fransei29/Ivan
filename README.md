# Ivan Martinez — Portfolio

Personal portfolio for **Ivan (Elvis) Martinez** — Full Stack Developer & Tech Lead.

Built with **Next.js 14 (App Router)**, **React**, **TypeScript** and **SCSS modules** per component.

## Stack

- Next.js 14 · React 18 · TypeScript
- SCSS modules (colocated per component)
- Zero runtime UI deps — lightweight and fast

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — dev server
- `npm run build` — production build
- `npm start` — serve the production build
- `npm run lint` — lint

## Structure

```
src/
  app/                  # App Router entry (layout + page)
  components/
    Nav/                # <Component>.tsx + <Component>.module.scss
    Hero/
    About/
    Stack/
    Projects/
    Experience/
    Contact/
  data/
    portfolio.ts        # single source of truth for content
  styles/
    _variables.scss     # colors, breakpoints, mixins
    globals.scss
```

## Customizing

All content lives in `src/data/portfolio.ts`. Color palette & breakpoints in
`src/styles/_variables.scss` (primary accent is a strong cyan `#00b4ff`).
