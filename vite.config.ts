import { defineConfig, loadEnv } from 'vite';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  if (typeof env.VITE_REPO_NAME === 'undefined') {
    throw new Error('VITE_REPO_NAME is undefined');
  }
  return {
    base: env.VITE_REPO_NAME,
    plugins: [react()],
  };
});
