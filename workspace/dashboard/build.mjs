import { build } from 'vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSourceLocator } from '@metagptx/vite-plugin-source-locator';

// Vite configuration from vite.config.js
const viteConfig = defineConfig({
  plugins: [
    viteSourceLocator({
      prefix: 'mgx',
    }),
    react(),
  ],
});

async function runBuild() {
  try {
    await build(viteConfig);
    console.log('Build completed successfully! Output generated in dist/');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

runBuild();
