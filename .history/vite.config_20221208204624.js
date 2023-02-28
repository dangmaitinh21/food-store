import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import alias from '@rollup/plugin-alias';
import { resolve } from 'path';

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), alias()],
  resolve: {
    alias: {
      entries: [{ find: /^@src\/(.*)/, replacement: 'src/$1' }],
      // '~': resolve(projectRootDir, 'src'),
    },
  },
});
