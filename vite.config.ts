import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import fs from 'fs';

function getSrcAliases() {
  const srcPath = path.resolve(__dirname, 'src');
  return fs
    .readdirSync(srcPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .reduce(
      (aliases, dirent) => {
        aliases[dirent.name] = path.resolve(srcPath, dirent.name);
        return aliases;
      },
      {} as Record<string, string>,
    );
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      ...getSrcAliases(),
    },
  },
});
