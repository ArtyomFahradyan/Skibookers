import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
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

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    coverage: {
      reporter: ['text', 'html'],
    },
  },
  resolve: {
    alias: {
      ...getSrcAliases(),
    },
  },
});
