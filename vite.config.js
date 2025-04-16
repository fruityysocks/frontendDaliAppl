import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import { defineConfig } from 'vite';
import esslint from 'vite-plugin-eslint';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ 
    esslint(),
  ],
  css: {
    postcss:{
      plugins: [
        autoprefixer(),
      ],
    },
  },
});