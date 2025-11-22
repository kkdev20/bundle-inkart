# INK Tattoo Studio - Vue.js Website Package

Complete website package for tattoo studio with multiple templates, built with Vue.js 3.

## Features

- **Template 4**: Dark Mode Frontend (English only)
- **Template 5**: White/Black Mode Frontend (English only)
- **Template 7**: Dashboard Backend (English only)
- **Template 8**: Proposal Document (English/Indonesian)
- **Home Page**: Package Overview (English/Indonesian)

## Tech Stack

- Vue.js 3 (via CDN)
- Tailwind CSS
- Font Awesome Icons
- Google Fonts (Inter)

## Project Structure

```
vue-appv1/
├── index.html              # Home page
├── template-4.html         # Dark Mode Frontend
├── template-5.html         # White/Black Mode Frontend
├── template-7.html         # Dashboard
├── template-8.html         # Proposal
├── js/
│   ├── app.js              # Main Vue app
│   ├── language-toggle.js  # Language toggle system
│   └── templates/
│       ├── template-4.js
│       ├── template-5.js
│       ├── template-7.js
│       └── template-8.js
├── vercel.json             # Vercel configuration
└── README.md
```

## Deployment

This project is ready to deploy on Vercel as a static site.

### Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Vercel will automatically detect and deploy

No build step required - this is a static site using Vue.js via CDN.

## Local Development

To run locally, use any static file server:

```bash
# Python 3
python -m http.server 8000

# Node.js (with http-server)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Language Support

- **Template 4, 5, 7**: English only
- **Template 8 & Home**: English/Indonesian (with language toggle)

## License

© 2024 INK Tattoo Studio - Bundle Package. All rights reserved.

