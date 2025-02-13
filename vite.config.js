import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import AutoImport from 'unplugin-auto-import/vite';
import SitemapPlugin from 'vite-plugin-sitemap';
import compression from 'vite-plugin-compression2';

const routes = [
  '/',
  '/formation-professionnelle-agadir',
  '/formation-professionnelle-agadir/:name',
  '/offres-emploi/:type',
  '/offres-emploi',
  '/gallery',
  '/gallery/:id',
  '/soins-infirmiers-agadir',
  '/recrutement-international-agadir',
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
          'preact/hooks': ['useState', 'useEffect'],
          'react-i18next': ['useTranslation'],
          'react-router-dom': ['Link', 'useParams'],
        },
      ],
    }),
    compression({
      algorithm: 'gzip', // Use gzip compression
      ext: '.gz', // File extension for compressed files
      threshold: 0, // Compress all files regardless of size
      filter: /\.(js|mjs|css|html|svg|json|ttf|woff|woff2)$/, // Include JavaScript and other assets
      deleteOriginalAssets: false, // Keep original files
    }),
    SitemapPlugin({
      hostname: 'https://oceanconnecting.ma/',
      outDir: 'dist',
      routes,
    }),
  ],
});
