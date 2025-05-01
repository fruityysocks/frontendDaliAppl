import { defineConfig } from 'vite';
import esslint from 'vite-plugin-eslint';
import autoprefixer from 'autoprefixer';
// eslint-disable-next-line import/no-unresolved
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    esslint(),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
      ],
    },
  },
});
