import { defineConfig } from 'vite';
import { resolve } from 'path';

import reactRefresh from '@vitejs/plugin-react-refresh';
import reactSvgPlugin from 'vite-plugin-react-svg';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), reactSvgPlugin()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  resolve: {
    alias: [
      { find: 'components', replacement: resolve(__dirname, 'src', 'components') },
      { find: 'styles', replacement: resolve(__dirname, 'src', 'styles') },
      { find: 'assets', replacement: resolve(__dirname, 'src', 'assets') },
    ],
  },
});
