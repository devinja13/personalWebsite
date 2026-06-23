# Alex Morgan Portfolio

A Vite + React + TypeScript + Tailwind portfolio for an operations research and data science student.

## Local development

```bash
npm install
npm run dev
```

## Personalize it

- Update the name, biography, links, and academic details in `src/App.tsx`.
- Add or edit projects in `src/data/projects.ts`.
- Add your actual PDF as `public/resume.pdf`; the Resume page is already linked to it.

## Deploy to GitHub Pages

The included workflow deploys every push to `master`.

1. In GitHub, open **Settings → Pages**.
2. Set the deployment source to **GitHub Actions**.
3. Push this repository to GitHub. The workflow will publish the built site.

The current Vite base path is configured for a repository named `personalWebsite`. If you rename the repository, update the path in `vite.config.ts`.
