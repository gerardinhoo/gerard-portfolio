export default function sitemap() {
  const base = 'https://gerardeklu.dev';
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/#projects`, lastModified: now },
    { url: `${base}/#skills`, lastModified: now },
    { url: `${base}/#resume`, lastModified: now },
    { url: `${base}/#contact`, lastModified: now },
  ];
}
