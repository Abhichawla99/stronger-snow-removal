# Image Requirements for SEO

## Required Images

### 1. Open Graph Image (og-image.jpg)
- **Location**: `/public/og-image.jpg`
- **Size**: 1200x630px
- **Format**: JPG or PNG
- **Content**: 
  - Logo: "Stronger Snow Removal Services"
  - Tagline: "Never Shovel Again - Red Deer"
  - Visual: Clean driveway or snow removal equipment
  - Colors: Match brand (blue/indigo)

### 2. Favicon (favicon.ico)
- **Location**: `/public/favicon.ico`
- **Size**: 32x32px or 16x16px
- **Format**: ICO
- **Content**: Snowflake icon or "S" logo

### 3. Apple Touch Icon (apple-touch-icon.png)
- **Location**: `/public/apple-touch-icon.png`
- **Size**: 180x180px
- **Format**: PNG
- **Content**: Same as favicon but larger

### 4. Hero/Content Images
- **Location**: `/public/images/`
- **Recommended**:
  - `hero-driveway-cleared.jpg` - Clean driveway (1920x1080px)
  - `before-after-snow.jpg` - Before/after comparison (1200x800px)
  - `team-working.jpg` - Team clearing snow (1200x800px)
  - `snow-covered-driveway.jpg` - Problem image (1200x800px)

### 5. Testimonial/Proof Images
- **Location**: `/public/images/testimonials/`
- **Recommended**:
  - Actual before/after photos from customers
  - Timestamped photos showing cleared driveways
  - Photos with Red Deer landmarks visible

## Image Optimization

All images should be:
- **Optimized**: Compressed for web (use tools like TinyPNG, ImageOptim)
- **WebP format**: Preferred for better compression
- **Alt text**: Descriptive, keyword-rich (see below)

## Alt Text Guidelines

### Hero Image
```
alt="Professional snow removal service clearing driveway in Red Deer, Alberta"
```

### Before/After Images
```
alt="Before and after snow removal service - snow-covered driveway cleared by Stronger Snow Removal in Red Deer"
```

### Team Images
```
alt="Stronger Snow Removal Services team clearing snow from residential driveway in Red Deer"
```

### Testimonial Images
```
alt="Cleared driveway proof photo from Stronger Snow Removal Services customer in Red Deer, timestamped December 15, 2024"
```

## Quick Setup

1. Create images using Canva or hire a designer
2. Optimize using TinyPNG.com
3. Place in `/public/` directory
4. Update components to use actual images instead of placeholders

## Current Status

⚠️ **All images are currently placeholders**
- Replace placeholders in:
  - `components/testimonials.tsx` (before/after section)
  - `components/hero.tsx` (if adding background image)
  - Any other components using placeholder images

