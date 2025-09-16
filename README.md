# VedaVaani — Emotion Explorer (Bubble UI)

Small UI demo built with Vite + React + Tailwind + Framer Motion.

## Setup

1. Clone / copy files into a folder.
2. From project root run:

```bash
npm install
# or if you prefer yarn
# yarn
```

3. Start dev server:

```bash
npm run dev
```

4. Open `http://localhost:5173` (Vite will show the exact URL).

## Notes

- If colors or tailwind classes show as plain text, it usually means Tailwind wasn't configured or `index.css` wasn't included. This project includes Tailwind setup in `tailwind.config.cjs` and imports `index.css` from `src/main.jsx`.
- If you get an error about `framer-motion`, run `npm install framer-motion` (it is already in `package.json` for this repo), then restart the dev server.

---

## Next steps I can implement for you (pick any):

- Hook each sub-emotion to scripture references (search Gita/Bhagavatam by keyword and show verse).
- Make the bubble layout force-directed (with small physics) for a floating look.
- Add a details drawer to show verse text and citation when a sub-emotion is clicked.

Tell me which one you want next and I will add it.
