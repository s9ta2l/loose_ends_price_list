import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { exhibition } from './src/content.js';

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[char]);

export default defineConfig({
  base: './',
  plugins: [react(), {
    name: 'exhibition-metadata',
    transformIndexHtml(html) {
      return html.replaceAll('__EXHIBITION_TITLE__', escapeHtml(exhibition.title))
        .replaceAll('__EXHIBITION_DESCRIPTION__', escapeHtml(exhibition.seoDescription));
    },
  }],
});
