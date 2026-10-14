# Quizroo

An interactive platform for personality tests, fun quizzes, knowledge challenges, and brain games.

## Stack

- Astro 5 + TypeScript
- Static generation and browser-side scoring
- GitHub Actions → GitHub Pages
- No database, account, or paid hosting required

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Astro. To validate a release, run `npm run build`.

## Deploy

Push to `main` to run `.github/workflows/deploy.yml`. Under **Settings → Pages**, set Source to **GitHub Actions**. The expected site is https://huangguanqiao.github.io/quizroo/.

## Add a quiz

Add an object to `src/data/quizzes.ts` with a unique slug, questions, options, and results. Astro generates a dedicated SEO-friendly route at `/quizroo/quiz/<slug>/`. Answers are processed locally in the browser.

## Notes

Quizroo is a working prototype. Personality results are entertainment, not professional psychological assessments. Brand name and custom domain are provisional.
