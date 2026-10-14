# Quizroo — AI contributor notes

Quizroo is a static-first, browser-only interactive quiz website. Keep it simple and inexpensive.

- Stack: Astro, TypeScript, static GitHub Pages deployment.
- Quiz content lives in `src/data/quizzes.ts`; add a new entry to publish a new static quiz page.
- Never collect or upload visitor answers without explicit approval. All scoring currently happens in the browser.
- Respect the `/quizroo` base path for GitHub Pages; use `import.meta.env.BASE_URL` for internal links and assets.
- Before changing architecture or adding services, explain the benefit and cost.
- Do not commit secrets or add analytics/tracking without approval.
- Verify with `npm run build` and, when possible, `npm run check`.
- Do not deploy to a production custom domain without approval.
