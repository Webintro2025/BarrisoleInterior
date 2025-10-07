import locations from '../../location';


export async function GET() {
  const baseUrl = 'https://textilestretchceiling.com';

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
  ];

  // Dynamic location pages
  const locationPages = locations.map(
    (location) => `/in/${location.replace(/\s+/g, '').toLowerCase()}`
  );

 

  const allPages = [
    ...staticPages,
    ...locationPages,
   
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    allPages.map((page) =>
      `  <url>\n    <loc>${baseUrl}${page}</loc>\n  </url>`
    ).join('\n') +
    '\n</urlset>';

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}