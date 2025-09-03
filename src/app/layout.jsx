import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-N7M5ZNGG');",
          }}
        />
        <title>Maglife Water | Magnesium-Enriched Hydration in India</title>
        <meta name="title" content="Maglife Water | Magnesium-Enriched Hydration in India" />
        <meta name="description" content="Maglife Water – magnesium-enriched bottled water for improved sleep, muscle recovery and hydration. Premium, lab-tested and available across India. Order online." />
        <meta name="keywords" content="magnesium water, magnesium enriched water, alkaline magnesium water, hydration India, magnesium bottled water, sleep recovery water" />
        <meta name="author" content="Maglife Water" />
        <link rel="canonical" href="https://maglifewater.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Maglife Water" />
        <meta property="og:url" content="https://maglifewater.com/" />
        <meta property="og:title" content="Maglife Water | Magnesium-Enriched Hydration in India" />
        <meta property="og:description" content="Maglife Water – magnesium-enriched bottled water for better sleep, muscle recovery & hydration. Order online." />
        <meta property="og:image" content="https://maglifewater.com/images/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@maglifewater" />
        <meta name="twitter:title" content="Maglife Water | Magnesium-Enriched Hydration in India" />
        <meta name="twitter:description" content="Maglife Water – magnesium-enriched bottled water for better sleep, muscle recovery & hydration." />
        <meta name="twitter:image" content="https://maglifewater.com/images/og-image.jpg" />

        {/* Preload LCP image (update filename) */}
        <link rel="preload" as="image" href="/images/hero-hero.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N7M5ZNGG" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          }}
        />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Maglife Water",
              url: "https://maglifewater.com",
              logo: "https://maglifewater.com/images/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/maglifepremiumwater/",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-8125355904",
                  contactType: "customer service",
                  areaServed: "IN",
                  availableLanguage: ["English", "Hindi", "Telugu"],
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
} 