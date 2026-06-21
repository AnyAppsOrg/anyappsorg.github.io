<h1 align="center">
  <img src="img/logo.jpg" alt="AnyApps Logo" width="120" />
  <br/>
  AnyApps
</h1>

This repository (`anyappsorg.github.io`) serves as the official landing page for the AnyApps organization. It showcases our portfolio of applications, including AnyForward.

## Tech Stack

The landing page is built using a modern, lightweight approach:
- Semantic HTML5
- Vanilla CSS3 (Custom Properties, Flexbox, Grid, Animations, Glassmorphism)
- Vanilla JavaScript

No external frameworks or libraries are used, ensuring maximum performance and a minimal footprint.

## Local Development

To run this website locally, you can use any static file server:

1. Clone this repository.
2. Navigate to the directory in your terminal.
3. Run a local server, for example using `npx serve`:
   ```bash
   npx serve .
   ```
4. Open your browser and navigate to `http://localhost:3000`.

## Directory Structure

```text
├── css/
│   └── style.css       # Main stylesheet
├── img/
│   ├── logo.jpg        # Organization logo
│   └── favicon.svg     # Favicon and icons
├── js/
│   └── main.js         # Interactivity scripts
├── README.md           # Repository documentation
└── index.html          # Main HTML entry point
```

## Adding New Applications

To feature a new application on the landing page, add a new `.app-card` within the `.apps-grid` container in `index.html`.

## License

© 2026 AnyApps. All rights reserved.
