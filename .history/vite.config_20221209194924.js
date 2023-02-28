import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import alias from '@rollup/plugin-alias';
import { resolve } from 'path';
import svgr from '@honkhonk/vite-plugin-svgr';

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), alias()],
  resolve: {
    alias: {
      '~': resolve(projectRootDir, 'src'),
    },
  },
});
