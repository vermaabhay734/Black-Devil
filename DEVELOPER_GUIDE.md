# Developer Guide: Editing Black Devil

This document provides guidance for developers who want to modify or extend the Black Devil astrology consultation website. Follow these instructions to make changes to different aspects of the application.

## Development Environment Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/vermaabhay734/black-devil.git
   cd black-devil
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Access the development site**
   - Open your browser and navigate to `http://localhost:4200`

## Project Structure

Understanding the structure will help you locate files for editing:

```
src/
├── app/
│   ├── core/          # Core services
│   ├── layout/        # Layout components
│   ├── pages/         # Page components
│   └── shared/        # Shared components
├── assets/            # Static assets
└── styles.scss        # Global styles
```

## Common Editing Tasks

### 1. Modifying Page Content

To edit content on existing pages:

1. Navigate to the corresponding page component in `src/app/pages/`
2. Page components typically consist of three files:
   - `*.html` - HTML template
   - `*.ts` - TypeScript component logic
   - `*.scss` - Component-specific styles

For example, to edit the home page:
```
src/app/pages/home/home.html   # Edit the HTML content
src/app/pages/home/home.ts     # Edit the component logic
src/app/pages/home/home.scss   # Edit the component styles
```

### 2. Updating Services Offered

To modify the services displayed on the home page:

1. Open `src/app/pages/home/home.ts`
2. Locate the `astrologyCards` array
3. Add, remove, or modify service objects in this array

Example of adding a new service:
```typescript
astrologyCards = [
  // Existing services...
  {
    title: 'New Service Name',
    description: 'Description of the new service',
    icon: 'service-icon' // This corresponds to an icon in the template
  }
];
```

### 3. Editing Testimonials

To update client testimonials:

1. Open `src/app/pages/home/home.html`
2. Locate the testimonials section
3. Modify the existing testimonial entries or add new ones

Each testimonial follows this structure:
```html
<div class="w-full md:w-1/3 flex-shrink-0 px-2">
  <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 h-full">
    <div class="flex items-center mb-4">
      <div class="w-12 h-12 bg-cosmic-gold rounded-full flex items-center justify-center">
        <span class="font-bold text-cosmic-purple">XX</span> <!-- Initials -->
      </div>
      <div class="ml-4">
        <h4 class="font-semibold">Full Name</h4>
        <div class="flex text-cosmic-gold">
          <span>★★★★★</span> <!-- Rating stars -->
        </div>
      </div>
    </div>
    <p>"Testimonial text goes here"</p>
  </div>
</div>
```

### 4. Customizing Theme Colors

To change the application's color scheme:

1. Open `tailwind.config.js` in the project root
2. Modify the theme section, particularly the colors
3. Update any custom color references in `src/app/core/theme-service.ts`

Example color customization:
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'cosmic-purple': '#8B5CF6',  // Change this to your preferred purple
        'cosmic-gold': '#F59E0B',    // Change this to your preferred gold
        'cosmic-black': '#111827',   // Change this to your preferred dark background
        // Add more custom colors as needed
      }
    }
  }
}
```

### 5. Adding New Pages

To create a new page:

1. Generate a new component using Angular CLI:
   ```bash
   ng generate component pages/new-page-name
   ```

2. Add the new route to `src/app/app.routes.ts`:
   ```typescript
   import { NewPageNameComponent } from './pages/new-page-name/new-page-name';

   export const routes: Routes = [
     // Existing routes...
     { path: 'new-page-url', component: NewPageNameComponent }
   ];
   ```

3. Add navigation link to `src/app/layout/navbar/navbar.html`:
   ```html
   <a routerLink="/new-page-url" routerLinkActive="active-link" class="nav-link">
     New Page Name
   </a>
   ```

### 6. Replacing Images and Assets

To update images or add new assets:

1. Place new images in the `src/assets/` directory
2. Reference them in your components using relative path:
   ```html
   <img src="/assets/your-new-image.png" alt="Description" />
   ```

3. To replace the logo:
   - Save the new logo as `logo.png` in `src/assets/`
   - Make sure it maintains a similar aspect ratio for proper display

### 7. Adding Custom CSS

To add global styles:

1. Edit `src/styles.scss` for application-wide styles
2. For component-specific styles, edit the component's `.scss` file

### 8. Modifying the Star Background

To customize the star background animation:

1. Open `src/app/shared/star-background/star-background.ts` and `star-background.scss`
2. Adjust the animation parameters in the TypeScript file
3. Modify the styling in the SCSS file

## Testing Your Changes

1. **Visual Testing**:
   - View your changes in the browser at `http://localhost:4200`
   - Test on different device sizes using browser developer tools

2. **Component Testing**:
   - Run `ng test` to execute unit tests
   - Update tests in `*.spec.ts` files when adding new functionality

3. **End-to-End Testing**:
   - Run `ng e2e` to execute end-to-end tests (if configured)

## Building for Production

After making changes, build the application to verify it compiles successfully:

```bash
npm run build
```

This will create a production build in the `dist/` directory.

## Getting Help

If you encounter issues or need additional guidance:

- Refer to Angular documentation at [angular.io](https://angular.io)
- Check TailwindCSS documentation at [tailwindcss.com](https://tailwindcss.com)
- Review component-specific comments in the codebase
- Contact the project maintainer at [contact@blackdevil.com](mailto:contact@blackdevil.com)
