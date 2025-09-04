# Deployment Guide: Black Devil

This document provides detailed instructions for deploying the Black Devil astrology consultation web application to various environments. Follow these steps to get your application live on the internet.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Building for Production](#building-for-production)
3. [Deployment Options](#deployment-options)
   - [Option 1: Angular hosting with Firebase](#option-1-angular-hosting-with-firebase)
   - [Option 2: Traditional Web Hosting](#option-2-traditional-web-hosting)
   - [Option 3: Azure Static Web Apps](#option-3-azure-static-web-apps)
   - [Option 4: Vercel Deployment](#option-4-vercel-deployment)
   - [Option 5: Netlify Deployment](#option-5-netlify-deployment)
4. [Continuous Integration/Continuous Deployment](#continuous-integrationcontinuous-deployment)
5. [Post-Deployment Tasks](#post-deployment-tasks)
6. [Troubleshooting](#troubleshooting)

## Prerequisites

Before deploying, ensure you have:

1. Node.js and npm installed (same version used for development)
2. Angular CLI installed globally (`npm install -g @angular/cli`)
3. Access to your chosen deployment platform/hosting service
4. Completed all development and testing
5. Updated any environment-specific variables

## Building for Production

Generate a production-ready build:

```bash
# Navigate to your project directory
cd black-devil

# Build the application with production configuration
ng build --configuration=production
```

This creates a `dist/` directory with optimized files ready for deployment.

## Deployment Options

### Option 1: Angular hosting with Firebase

Firebase provides a fast and reliable hosting solution that works well with Angular applications.

1. **Install Firebase tools**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:
   ```bash
   firebase login
   ```

3. **Initialize Firebase in your project**:
   ```bash
   firebase init
   ```
   - Select "Hosting"
   - Choose your Firebase project or create a new one
   - Specify `dist/browser` as the public directory (for Angular 17+)
   - Configure as a single-page app: Yes
   - Set up automatic builds and deploys: No (for now)

4. **Deploy to Firebase**:
   ```bash
   firebase deploy
   ```

5. **Access your deployed application** at the provided Firebase URL.

### Option 2: Traditional Web Hosting

For traditional web hosting services (like GoDaddy, Bluehost, etc.):

1. **Access your hosting control panel** and locate the file manager or FTP credentials.

2. **Upload your build files**:
   - Using FTP software (like FileZilla), upload the contents of `dist/browser` to your server's web root directory (often `public_html`, `www`, or `htdocs`).

3. **Configure server for Angular routing**:
   - Create or update the `.htaccess` file (for Apache servers):
     ```
     <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
     </IfModule>
     ```
   - For Nginx servers, update the server block:
     ```
     location / {
       try_files $uri $uri/ /index.html;
     }
     ```

4. **Verify deployment** by accessing your domain.

### Option 3: Azure Static Web Apps

Deploy to Microsoft Azure Static Web Apps:

1. **Create an Azure Static Web App**:
   - Go to the Azure portal
   - Create a new Static Web App resource
   - Connect to your GitHub repository

2. **Configure build settings**:
   - App location: `/`
   - API location: leave empty (or configure if you have an API)
   - Output location: `dist/browser`

3. **Azure will automatically deploy** your application and provide a URL.

4. **Configure custom domain** in the Azure portal if needed.

### Option 4: Vercel Deployment

Vercel is optimized for frontend frameworks like Angular:

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy to Vercel**:
   ```bash
   vercel
   ```
   Follow the prompts to log in and configure your project.

3. **For subsequent deployments**:
   ```bash
   vercel --prod
   ```

4. **Access your application** at the provided Vercel URL.

### Option 5: Netlify Deployment

Netlify offers simple deployment with continuous integration:

1. **Create a `netlify.toml` file** in your project root:
   ```toml
   [build]
     command = "ng build"
     publish = "dist/browser"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. **Deploy via Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify deploy
   ```
   Follow the prompts to authorize and set up your site.

3. **For production deployment**:
   ```bash
   netlify deploy --prod
   ```

4. **Alternatively, connect your GitHub repository** in the Netlify web interface for automatic deployments.

## Continuous Integration/Continuous Deployment

Set up CI/CD pipelines for automated deployment:

### GitHub Actions

1. **Create a `.github/workflows/deploy.yml` file**:
   ```yaml
   name: Deploy to Firebase Hosting
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build_and_deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         
         - name: Set up Node.js
           uses: actions/setup-node@v2
           with:
             node-version: '18'
             
         - name: Install dependencies
           run: npm ci
           
         - name: Build
           run: npm run build
           
         - name: Deploy to Firebase
           uses: FirebaseExtended/action-hosting-deploy@v0
           with:
             repoToken: '${{ secrets.GITHUB_TOKEN }}'
             firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
             channelId: live
             projectId: your-firebase-project-id
   ```

2. **Add the necessary secrets** to your GitHub repository.

## Post-Deployment Tasks

After successful deployment:

1. **Test the deployed application** thoroughly on different devices and browsers.

2. **Set up monitoring** using tools like Google Analytics, LogRocket, or Sentry.

3. **Configure HTTPS** if not automatically set up by your hosting provider.

4. **Update DNS settings** if you're using a custom domain.

5. **Submit your sitemap** to search engines for indexing.

6. **Test performance** using tools like Lighthouse or PageSpeed Insights.

## Troubleshooting

### Common Issues and Solutions

1. **Routing issues (404 errors)**:
   - Ensure proper server configuration for Angular's client-side routing
   - Check that the correct redirect rules are in place

2. **Assets not loading**:
   - Verify paths are correct in your components
   - Check that assets were included in the build process

3. **White screen after deployment**:
   - Check browser console for errors
   - Verify that all dependencies are properly included

4. **Performance issues**:
   - Enable production mode in your Angular application
   - Implement lazy loading for routes
   - Optimize images and other assets

5. **CSS/Styling issues**:
   - Ensure TailwindCSS purging is configured correctly
   - Check for browser-specific CSS issues

### Getting Support

If you encounter issues during deployment:

1. Consult the documentation for your specific hosting provider
2. Check Angular deployment guides at [angular.io](https://angular.io/guide/deployment)
3. Search for specific error messages in the Angular community forums
4. Contact project maintainers at [support@blackdevil.com](mailto:support@blackdevil.com)
