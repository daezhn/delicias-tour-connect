import { Helmet } from "react-helmet-async";
import { useLocale } from "@/hooks/use-locale";

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  type?: "website" | "article";
  canonical?: string;
  jsonLd?: Record<string, unknown>;
}

export const SEO = ({ 
  title, 
  description, 
  image = "/images/herook.png", 
  type = "website",
  canonical,
  jsonLd
}: SEOProps) => {
  const { locale } = useLocale();
  
  const siteName = "Delicias Tour Connect";
  const fullTitle = `${title} | ${siteName}`;
  const currentUrl = window.location.href;
  const effectiveCanonical = canonical || currentUrl;

  return (
    <Helmet>
      {/* Standard metadata */}
      <html lang={locale} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={effectiveCanonical} />
      
      {/* Security: Content Security Policy */}
      <meta 
        httpEquiv="Content-Security-Policy" 
        content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://*.google.com https://*.googleapis.com; connect-src 'self' https://api.open-meteo.com https://nominatim.openstreetmap.org https://api.openai.com; frame-src 'self' https://www.google.com;" 
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={effectiveCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale === "es" ? "es_MX" : "en_US"} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};
