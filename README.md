# BrandSip

A modern, responsive website for BrandSip - a custom branded water bottle provider for the hospitality industry. Built with Next.js and Tailwind CSS.

## 🚀 Live Demo

Visit the live site: [BrandSip](https://sagegallant.github.io/brandsip/)

## 📋 Features

- Responsive design for all devices
- Modern UI with smooth animations
- Static site generation for fast loading
- Optimized for SEO

## 🛠️ Technologies Used

- **Next.js** - React framework for static site generation
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **TypeScript** - Static type checking

## 📷 Screenshots

![BrandSip Website](/screenshots/homepage.png)

## 📝 Project Structure

```
/src
  /app - Next.js app router pages
  /components - Reusable UI components
  /styles - Global styles and Tailwind config
  /utils - Utility functions
  /hooks - Custom React hooks
  /contexts - React context providers
/public - Static assets
```

## 🔧 Development Setup

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/SageGallant/brandsip.git

# Navigate to the project directory
cd brandsip

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Building for Production

```bash
# Create a production build
npm run build

# Export as static site
npm run export
```

## 🌐 Deployment

This website is configured for GitHub Pages deployment. The GitHub Actions workflow automatically builds and deploys the site whenever changes are pushed to the main branch.

## 📄 License

[MIT License](LICENSE)

## Deployment to GitHub Pages

This project is configured for deployment to GitHub Pages. The deployment is automated using GitHub Actions.

### Prerequisites

- GitHub account
- Repository named `brandsip` (or update the basePath in next.config.js if using a different name)

### Deployment Steps

1. Push your code to the main branch
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at: `https://[your-username].github.io/brandsip`

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export
```

### Important Notes

- The site is configured to use the `/brandsip` base path for GitHub Pages
- All images are configured to work with the base path
- The site is built as a static site for GitHub Pages compatibility

### Custom Domain

If you want to use a custom domain:

1. Add a CNAME file in the public directory
2. Configure your domain's DNS settings
3. Update the basePath in next.config.js accordingly
