# Belier Shopify Theme

A modern, responsive Shopify theme created by ConexionCreativa.

## Features

- **Responsive Design**: Mobile-first approach with responsive grid system
- **Modern UI**: Clean, minimalist design with smooth animations
- **Customizable**: Easy-to-use theme settings for colors, fonts, and content
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and structured data
- **Accessibility**: WCAG compliant with proper ARIA labels

## Theme Structure

```
belier-shopify/
├── assets/
│   ├── base.css          # Base styles and utilities
│   ├── header.css        # Header-specific styles
│   ├── footer.css        # Footer-specific styles
│   ├── product.css       # Product page styles
│   ├── cart.css          # Cart page styles
│   └── global.js         # Main JavaScript functionality
├── config/
│   ├── settings_schema.json  # Theme settings configuration
│   └── settings_data.json    # Default settings values
├── layout/
│   └── theme.liquid      # Main theme layout
├── sections/
│   ├── header.liquid     # Header section
│   ├── footer.liquid     # Footer section
│   ├── featured-collection.liquid
│   └── image-with-text.liquid
├── snippets/
│   ├── product-card.liquid
│   ├── pagination.liquid
│   ├── icon-search.liquid
│   ├── icon-cart.liquid
│   └── icon-caret.liquid
└── templates/
    ├── index.liquid      # Homepage template
    ├── product.liquid    # Product page template
    ├── collection.liquid # Collection page template
    └── cart.liquid       # Cart page template
```

## Installation

1. Download the theme files
2. Upload to your Shopify store via the admin panel:
   - Go to Online Store > Themes
   - Click "Add theme" > "Upload theme"
   - Select the theme zip file
3. Customize the theme settings in the theme editor

## Customization

### Colors
The theme uses CSS custom properties for easy color customization:
- `--color-primary`: Main brand color
- `--color-secondary`: Background color
- `--color-accent`: Accent color for buttons and links

### Typography
- Heading font: Configured in theme settings
- Body font: Configured in theme settings

### Sections
The theme includes several customizable sections:
- Header with logo and navigation
- Footer with multiple columns
- Featured Collection
- Image with Text
- Newsletter signup

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized images with lazy loading
- Minified CSS and JavaScript
- Efficient grid system
- Fast loading times

## Support

For support and customization requests, contact ConexionCreativa.

## License

This theme is created for ConexionCreativa clients. All rights reserved.

