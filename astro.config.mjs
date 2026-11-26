// @ts-check
import { defineConfig } from 'astro/config';

// Сайт публикуется на GitHub Pages по адресу
// https://mrp01283.github.io/United-Software-Engineers/
// Если подключите свой домен (например use-club.kz):
//   site: 'https://use-club.kz', base: '/'
export default defineConfig({
  site: 'https://mrp01283.github.io',
  base: '/United-Software-Engineers',
  trailingSlash: 'always',
});
