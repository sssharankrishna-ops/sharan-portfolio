# Sharan Krishna S S — Portfolio

A responsive, terminal-inspired personal portfolio using static HTML, CSS, and JavaScript.

## Included
- `index.html` — single-page portfolio with hero, terminal visual, project filters, about, stack, recognition, and contact sections
- `css/style.css` — responsive dark theme with green/cyan accents and project visuals
- `js/main.js` — mobile navigation and project filters
- `assets/Sharan_Krishna_Resume.pdf` — latest resume supplied for this portfolio
- A Services section for portfolio, business/creator websites, and launch/update support
- A contact form that prepares an email draft using the visitor’s default email app; it does not store submissions or send them to a server

## Before making it public
- Review the descriptions and make sure they reflect your contribution to each individual/team project.
- Project cards are presented as completed projects. ECHONET is described narrowly as a mesh networking project because its repository currently contains only a brief README; Kaaval AI details are based on its project presentation and repository files.
- This version intentionally does not display a personal phone number on the public page. The email, LinkedIn, and GitHub links are included.
- The linked resume contains contact information; consider removing your phone number from the PDF before publishing it publicly if you don't want it visible online.
- Review all content and resume details for accuracy.

## Preview locally
Open `index.html` in a browser. You can also use VS Code's Live Server extension.

## Deploy on Vercel
1. Create a new public GitHub repository, for example `sharan-portfolio`.
2. Upload the contents of this folder to the repository root (make sure `index.html` is at the root).
3. Sign in to Vercel with GitHub and import the repository.
4. For a plain static site, leave the framework preset as **Other** and leave the build command and output directory empty/default as appropriate.
5. Deploy. Vercel will provide a public URL.
6. For future updates, push commits to the connected GitHub repository; Vercel can redeploy automatically.

This is a static site. It does not need API keys, a database, or a backend.


## Project access options

Each project card is keyboard- and mouse-accessible. Select a card to open its project access dialog with two actions:

- **Visit repository** opens the source repository where one is linked.
- **Use / open project** opens the repository usage guide, or the demo-request email for the hostel-management project.

No live deployment URLs were provided for these projects, so the second action does not claim to launch a live hosted app. When a project is deployed, update that card's `data-use-url` in `index.html` to its real demo URL; the button will then launch the live app.


## Contact form behavior
The contact form validates required fields and opens a prefilled email to `sssharankrishna@gmail.com`. Because this is a static site with no backend, it does not collect submissions automatically. To receive submissions without requiring visitors to open an email app, connect a form service or add a backend endpoint before deployment.

## Portfolio development services
The Services section introduces portfolio websites, business/creator websites, and website launch/update assistance. Scope and pricing should be discussed and agreed with each client before work begins.
