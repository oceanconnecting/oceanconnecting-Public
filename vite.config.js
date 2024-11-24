import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    preact(),
    AutoImport({
      imports: [
        {
          'preact/hooks': [
            'useState', // Automatically imports useState
            'useEffect', // Automatically imports useEffect
          ],
          'react-i18next': [
            'useTranslation', // Automatically imports useTranslation
          ],
          'react-router-dom': [
            'Link',
            'useParams' // Automatically imports all exports from react-router-dom
          ],
        },
      ],
    }),
  ],
});
