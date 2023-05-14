import { defineConfig, loadEnv } from 'vite';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  if (typeof env.VITE_BASE_URL_PATH === undefined) {
    throw new Error(
      'VITE_BASE_URL_PATH is undefined. Please check .env file. necessary for sub-route in github-pages.',
    );
  }
  return {
    base: env.VITE_BASE_URL_PATH || '/',
    plugins: [react()],
  };
});
