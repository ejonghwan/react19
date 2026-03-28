import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      legacy({
        targets: ['defaults', 'not IE 11'], // 지원할 브라우저 설정
      }),
    ],
    base: mode === 'production' ? '/react19/' : '/',
  };
});
