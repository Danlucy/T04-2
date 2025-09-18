# Deployment Guide

This guide provides instructions for deploying your COS Website to various hosting platforms.

## GitHub Pages (Recommended)

GitHub Pages is the easiest way to deploy your static website for free.

### Step-by-Step Instructions:

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)"
   - Click "Save"

3. **Access your site**
   - Your site will be available at: `https://yourusername.github.io/repository-name`
   - It may take a few minutes for the first deployment

### Custom Domain (Optional)
1. Add a `CNAME` file to your repository root with your domain name
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

## Alternative Hosting Options

### Netlify
1. **Drag and Drop Method:**
   - Go to [netlify.com](https://netlify.com)
   - Drag your project folder to the deploy area
   - Your site will be live instantly

2. **Git Integration:**
   - Connect your GitHub repository
   - Set build command: (leave empty for static sites)
   - Set publish directory: `/`
   - Deploy automatically on every push

### Vercel
1. **GitHub Integration:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure project settings (usually auto-detected)
   - Deploy with one click

2. **CLI Method:**
   ```bash
   npm i -g vercel
   vercel
   ```

### Firebase Hosting
1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase:**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Deploy:**
   ```bash
   firebase deploy
   ```

### Surge.sh
1. **Install Surge:**
   ```bash
   npm install -g surge
   ```

2. **Deploy:**
   ```bash
   surge
   ```

## Local Development Server

For testing before deployment:

```bash
# Using Node.js http-server
npm install -g http-server
http-server

# Using Python
python -m http.server 8000

# Using PHP
php -S localhost:8000
```

## Build Optimization (Optional)

While not required for this static site, you can optimize for production:

### Image Optimization
- Compress images using tools like TinyPNG
- Convert to WebP format for better performance
- Use appropriate image sizes

### CSS/JS Minification
- Use tools like UglifyJS for JavaScript
- Use cssnano for CSS minification

### Performance Tips
- Enable gzip compression on your server
- Use a CDN for faster global access
- Optimize font loading
- Add meta tags for SEO

## Environment Variables

If you need environment-specific configurations:

1. Create `.env` files (already ignored in .gitignore)
2. Use different configurations for development/production
3. Never commit sensitive data to your repository

## Continuous Deployment

### GitHub Actions (Advanced)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

## Troubleshooting

### Common Issues:
1. **404 Error**: Check file paths are correct and case-sensitive
2. **CSS/JS not loading**: Verify relative paths in HTML
3. **Images not showing**: Ensure image files are in the correct location
4. **GitHub Pages not updating**: Check Actions tab for build status

### Debug Steps:
1. Test locally first
2. Check browser developer console for errors
3. Verify all files are committed and pushed
4. Check hosting platform's logs/dashboard

## Domain and SSL

Most modern hosting platforms provide:
- Free SSL certificates
- Custom domain support
- CDN integration
- Automatic deployments

Choose the platform that best fits your needs and technical comfort level.

---

For any deployment issues, check the hosting platform's documentation or create an issue in this repository.