# BrandSip Website

A modern, responsive website built with Next.js and Tailwind CSS.

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
