// src/app/api/sitemap/route.ts

export const dynamic = "force-static";  // Fuerza la ruta a ser estática

import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.hexagono.xyz';

  const urls = [
    { loc: `${baseUrl}/`, lastmod: new Date().toISOString() },
    { loc: `${baseUrl}/diseno-web`, lastmod: new Date().toISOString() },
    { loc: `${baseUrl}/desarrollo-a-medida`, lastmod: new Date().toISOString() },
    { loc: `${baseUrl}/seo`, lastmod: new Date().toISOString() },
    { loc: `${baseUrl}/hosting`, lastmod: new Date().toISOString() },
    { loc: `${baseUrl}/dominio`, lastmod: new Date().toISOString() },
    { loc: `${baseUrl}/sobre-nosotros`, lastmod: new Date().toISOString() },
    { loc: `${baseUrl}/precios`, lastmod: new Date().toISOString() },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map(url => `
        <url>
          <loc>${url.loc}</loc>
          <lastmod>${url.lastmod}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>`).join('')}
    </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
