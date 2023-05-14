import { defineConfig, loadEnv } from 'vite';

import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  const viteBaseUrlName = env.VITE_BASE_URL_NAME;
  if (viteBaseUrlName === undefined) {
    throw new Error(
      'VITE_BASE_URL_NAME is undefined. Please check .env file. necessary for sub-route in github-pages.',
    );
  }
  return {
    base: viteBaseUrlName ? `/${viteBaseUrlName}/` : '/',
    plugins: [react()],
  };
});
