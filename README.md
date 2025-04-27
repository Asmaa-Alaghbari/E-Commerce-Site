# E-Commerce-Site

A simple e-commerce site built with next.js and tailwindcss for learning purposes and to practice building a full-stack application.

## Table of Contents

- [Project Details](#project-details)
- [Features](#features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)
- [Learn More](#learn-more)

# Project Details

- **Start Date**: 21/04/2025
- **Last Updated**: 27/04/2025
- **Programming Language**: JavaScript, TypeScript
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Database**: MongoDB
- **Deployment**: Vercel
- **Tools**:
  - Visual Studio Code for development
  - Postman for API testing
  - MongoDB (Atlas) for database management
- **App Type**: Full-stack web application

## Features

- Product listing and details
- Shopping cart functionality
- Responsive design
- Integration with MongoDB for data storage

## Getting Started

First, clone the repository:

```bash
git https://github.com/Asmaa-Alaghbari/E-Commerce-Site
cd E-Commerce-Site/ecommerce
```

Install dependencies:

```bash
npm install
npm install mongodb
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the project by modifying files in the `app/` directory. The application auto-updates as you edit the files.

## Environment Variables

To run this project, you need to set up the following environment variables:

```bash
$env:MONGODB_USER="your-mongodb-username"
$env:MONGODB_PASSWORD="your-mongodb-password"
$env:NEXT_PUBLIC_SITE_URL="http://localhost:3000"
echo $env:NEXT_PUBLIC_SITE_URL
```

For Linux/macOS, use `export` instead of `$env:`.

## Folder Structure

```
ecommerce/
├── app/                # Application code (pages, components, etc.)
├── public/             # Static assets
├── .next/              # Build output (auto-generated)
├── types/              # TypeScript types
├── next.config.ts      # Next.js configuration
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
└── README.md           # Documentation
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## References

- [Next.js: Creating and Hosting a Full-Stack Site](https://www.linkedin.com/learning/next-js-creating-and-hosting-a-full-stack-site?u=106534538) - By Shaun Wassell

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about Tailwind CSS.
- [MongoDB Documentation](https://www.mongodb.com/docs/) - Learn about MongoDB.
