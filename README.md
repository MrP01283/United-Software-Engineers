# United Software Engineers (USE)

Сайт IT-клуба студентов ЮКУ им. М. Ауэзова.

**Сайт:** https://mrp01283.github.io/United-Software-Engineers/

Сделан на [Astro](https://astro.build). Три языка: русский (основной), казахский и английский.

## Запуск у себя

Нужен [Node.js](https://nodejs.org) версии 22.23 или новее.

```bash
npm install      # один раз — установить зависимости
npm run dev      # сайт на http://localhost:4321/United-Software-Engineers/
npm run build    # собрать готовый сайт в папку dist/ (проверка перед пушем)
```

## Публикация

Ничего делать не нужно: после каждого пуша в ветку `main` GitHub Actions сам собирает сайт
и выкладывает его на GitHub Pages (файл `.github/workflows/deploy.yml`). Статус — во вкладке **Actions** репозитория.

## Где что лежит

| Что | Где |
| --- | --- |
| Ссылка на Telegram-бота и GitHub | `src/config.ts` |
| Все тексты сайта (ru / kk / en) | `src/i18n/ru.ts`, `kk.ts`, `en.ts` |
| Записи блога | `src/content/blog/<язык>/<название>.md` |
| Проекты | `src/content/projects/<название>.md` |
| Страницы | `src/pages/[lang]/…` |
| Шапка и подвал | `src/components/Header.astro`, `Footer.astro` |
| Общие стили, цвета, анимации | `src/styles/global.css` |
| Логотипы, иконка сайта | `public/images/`, `public/favicon.svg` |

## Как добавить запись в блог

Создайте файл с одинаковым именем в трёх папках — `src/content/blog/ru/`, `kk/`, `en/`:

```markdown
---
title: Заголовок записи
description: Короткое описание для списка записей.
date: 2026-12-20
tags: [встречи]
---

Текст в формате Markdown.
```

Пока перевода нет, можно добавить `draft: true` — запись не появится на сайте.

## Как добавить проект

Создайте файл в `src/content/projects/`, тексты на трёх языках — внутри:

```markdown
---
title:
  ru: Название
  kk: Атауы
  en: Name
description:
  ru: Что делает проект.
  kk: Жоба не істейді.
  en: What the project does.
stack: [React, Node.js]
status: active   # active — в работе, done — готов, idea — идея
repo: https://github.com/...   # необязательно
demo: https://...              # необязательно
order: 4                       # порядок в списке
---
```

## Как поменять тексты

Все надписи лежат в `src/i18n/`. У трёх файлов одинаковая структура: если добавляете строку в `ru.ts`,
добавьте её и в `kk.ts` с `en.ts` — иначе `npm run build` подскажет, где не хватает перевода.

## Свой домен

Если появится домен (например `use-club.kz`): в `astro.config.mjs` поставьте
`site: 'https://use-club.kz'` и `base: '/'`, а домен укажите в настройках репозитория → **Pages**.

## Что ещё заменить

- [ ] Ссылку на Telegram-бота в `src/config.ts` (сейчас заглушка).
- [ ] Примеры проектов и записей блога — на настоящие.
- [ ] Казахские тексты — проверить носителю языка.
