import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import AutoImport from 'unplugin-auto-import/vite';
import SitemapPlugin from 'vite-plugin-sitemap';

const routes = [
  '/',
  '/formation-professionnelle-agadir',
  '/formation-professionnelle-agadir/:name',
  '/jobs/:type',
  '/jobs',
  '/gallery',
  '/gallery/:id',
  '/soins-infirmiers-agadir',
  '/recrutement-international-agadir',
  '/languages',
  // Add any other static routes here
];

export default defineConfig({
  alias: {
    'react': 'preact/compat',
    'react-dom': 'preact/compat',
  },
  plugins: [
    preact(),
    AutoImport({
      imports: [
        {
          'preact/hooks': [
            'useState',
            'useEffect',
          ],
          'react-i18next': [
            'useTranslation',
          ],
          'react-router-dom': [
            'Link',
            'useParams',
          ],
        },
      ],
    }),
    SitemapPlugin({
      hostname: 'https://oceanconnecting.ma', // Replace with your site URL
      outDir: 'dist', // The output directory for the sitemap
      routes, // Use the manually defined routes here
      // If you have dynamic routes, you can generate them manually
    
    }),
  ],
});
