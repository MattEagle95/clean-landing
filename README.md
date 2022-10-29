# Landing Page

A simple landing page written with NextJS and TailwindCSS. 🛬  

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/matteagle95/clean-landing/NodeJS%20CI)
![GitHub package.json version](https://img.shields.io/github/package-json/v/matteagle95/clean-landing)
![GitHub](https://img.shields.io/github/license/matteagle95/clean-landing)

## ⭐ Features

- Clean Design
- Light/Dark Mode
- I18N
- SEO optimized
- 404 page
- Plausible analytics

## 🐳 Run with Docker

Build

```bash
docker build . -t skrambl/landing-page:1.0.0
```

Start

```bash
docker run -d --restart=always -p 3000:3000 --name landing-page skrambl/landing-page:1.0.0
```

## 🐳 Run with Docker-Compose

```bash
docker-compose up -d
```

## 💻 Run locally

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

## ⚙ Customization

There are options for customization available in `.env.example`. To use environment variables while developing/building rename the file to `.env`.

## ℹ Licence

MIT
