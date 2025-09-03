# Maglife – Next.js Single-Page eCommerce

A production-ready single-page storefront for Maglife Water built with Next.js 14, React 18, and Tailwind CSS. It features a modular component structure, Google Sheets-powered catalog, Razorpay checkout, SEO foundations, and performance best practices.

## 1) Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run
```bash
npm install
npm run dev
# open http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
```

## 2) Project Structure
```
src/
  app/
    page.jsx         # Main page (sections composed here)
    layout.jsx       # Global <html> wrapper, SEO meta, GTM
    globals.css
  components/        # Reusable UI components
  hooks/             # Custom hooks
  utils/             # Utilities (sheets, razorpay)
  assets/            # Static images used by next/image
public/
  robots.txt
  sitemap.xml
```

See `COMPONENT_STRUCTURE` summary below for details.

## 3) Environment Variables
Create `.env.local` in project root:
```bash
# Razorpay
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_YOUR_TEST_KEY_ID
NEXT_PUBLIC_RAZORPAY_KEY_SECRET=YOUR_TEST_KEY_SECRET

# App
NODE_ENV=development
NEXT_PUBLIC_APP_NAME=Maglife
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 4) Google Sheets Product Catalog

The shop can read products from a published Google Sheet (CSV). Minimal setup:
1. In Google Sheets → File → Share → Publish to web → CSV → Publish
2. Copy the CSV URL (ends with `?output=csv`)
3. Update `src/utils/sheetsData.js`:
   ```js
   // set your CSV url
   const csvUrl = 'https://docs.google.com/spreadsheets/d/e/.../pub?output=csv';
   ```

Expected columns (order matters):
`id, name, price, description, volume, magnesiumContent, imageURL`

Example row:
```
1, "Maglife Single Bottle", 40, "Perfect for trying out...", "1L", "18-24mg/L", "/new-bottle.png"
```

Troubleshooting:
- If no products appear, check the browser console and CSV accessibility
- Ensure price is numeric and sheet is publicly readable

## 5) Payments – Razorpay

Two API routes are provided:
- `src/app/api/create-order/route.js` – Creates an order
- `src/app/api/verify-payment/route.js` – Verifies payment signature

Basic flow:
1. Add items to cart → Cart sidebar → Proceed to Checkout
2. Create order via API → open Razorpay checkout
3. Verify payment → show confirmation and clear cart

Security notes:
- Never expose secrets in client code
- Use `.env.local` for keys
- Verify signature on the server

## 6) SEO & Analytics

- Full `<head>` meta: title, description, keywords, canonical, OG, Twitter
- Google Tag Manager added in `layout.jsx` (replace container ID if needed)
- Organization JSON-LD injected before `</body>`
- `public/sitemap.xml` and `public/robots.txt` included

After deployment, submit the sitemap in Google Search Console.

## 7) Component Structure (Summary)

- `Header.jsx` – Navigation, logo, cart, dark mode
- `HomeSection.jsx` – Hero
- `BenefitsSection.jsx` – Benefits grid
- `ProductSection.jsx` – Product info
- `ShopSection.jsx` – Catalog grid, add to cart
- `FaqSection.jsx` – FAQs
- `ContactSection.jsx` – Contact & links
- `Footer.jsx` – Footer links
- Utility: `CartSidebar.jsx`, `ScrollToTopButton.jsx`, `NavLink.jsx`, `BottleImage.jsx`, `StandingBottleImage.jsx`, `BenefitCard.jsx`, `FaqItem.jsx`, `LoadingSpinner.jsx`

## 8) Accessibility & Images

- Alt text added to bottle images; extend for other images as you add them
- For decorative images, use `alt=""`
- Provide width/height where possible to reduce CLS

## 9) Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

## 10) Troubleshooting
- Sheets not loading: verify CSV URL and console logs
- Razorpay failures: check env vars and API routes
- 404s for images: ensure files exist in `src/assets` or `public`

## 11) Deployment
- Build with `npm run build`
- Serve with `npm start` or deploy to Vercel/Node host
- Ensure `robots.txt` and `sitemap.xml` are in `public/`

---

Copyright © Maglife
