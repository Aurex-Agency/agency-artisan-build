import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
}

export const Seo = ({ title, description, keywords, path = "/" }: SeoProps) => {
  const url = typeof window !== "undefined" ? `${window.location.origin}${path}` : path;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};