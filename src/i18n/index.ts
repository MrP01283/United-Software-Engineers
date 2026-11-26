import ru, { type Dict } from './ru';
import kk from './kk';
import en from './en';

export const LANGS = ['ru', 'kk', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'ru';

/** Подписи в переключателе языков. */
export const LANG_LABELS: Record<Lang, { short: string; name: string; locale: string }> = {
  ru: { short: 'RU', name: 'Русский', locale: 'ru-RU' },
  kk: { short: 'KZ', name: 'Қазақша', locale: 'kk-KZ' },
  en: { short: 'EN', name: 'English', locale: 'en-US' },
};

const dicts: Record<Lang, Dict> = { ru, kk, en };

export function t(lang: Lang): Dict {
  return dicts[lang];
}

export function isLang(value: string | undefined): value is Lang {
  return !!value && (LANGS as readonly string[]).includes(value);
}

/** Пути для getStaticPaths: /ru/, /kk/, /en/ */
export function langPaths() {
  return LANGS.map((lang) => ({ params: { lang } }));
}

/** Ссылка внутри сайта с учётом base (GitHub Pages) и языка: href('ru', 'blog') → /United-Software-Engineers/ru/blog/ */
export function href(lang: Lang, path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\/|\/$/g, '');
  return `${base}/${lang}/${clean ? clean + '/' : ''}`;
}

/** Ссылка на файл из public/ с учётом base. */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(LANG_LABELS[lang].locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}
