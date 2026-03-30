# iris-photo

Одностраничный сайт-визитка фотографа: пастельная тёплая палитра, портфолио, форма записи, ссылки на Instagram и Telegram. Статическая сборка под хостинг **Timeweb** (или любой статический хостинг).

## Локально

```bash
npm install
cp .env.example .env
# Укажите PUBLIC_SITE_URL и PUBLIC_WEB3FORMS_ACCESS_KEY
npm run dev
```

Сборка: `npm run build`, результат в папке `dist/`.

## Форма «Запись»

Используется [Web3Forms](https://web3forms.com): зарегистрируйтесь, получите access key, пропишите в `.env` как `PUBLIC_WEB3FORMS_ACCESS_KEY` и пересоберите сайт. Письма приходят на указанный при регистрации email.

## Админка портфолио (Decap CMS)

После деплоя откройте `https://ваш-домен.ru/admin/`.

1. Залейте репозиторий на **GitHub** (имя репозитория может быть `iris-photo`).
2. В `public/admin/config.yml` замените `YOUR_GITHUB_USERNAME/iris-photo` на ваш `логин/репозиторий`.
3. **GitHub + статический Timeweb:** у Decap нет своего сервера авторизации. Нужен небольшой **OAuth-прокси** между браузером и GitHub (бесплатный тариф подойдёт на Render, Railway, Vercel и т.п.). Подробности и готовые образы — в [документации Decap, backend GitHub](https://decapcms.org/docs/github-backend/). В `config.yml` раскомментируйте `base_url` и `auth_endpoint` и укажите URL вашего прокси. В настройках OAuth App на GitHub в качестве callback укажите URL, который требует выбранный прокси (он указан в его README).
4. Если прокси подключать не хотите, контент можно менять **вручную**: файлы в `src/content/portfolio/` и `src/data/site.json` — через GitHub в браузере или локально, затем `npm run build` и выгрузка `dist/` на Timeweb.

Правки через админку создают коммиты в репозитории. После сохранения всё равно нужна **сборка и выгрузка `dist/`** (или **GitHub Actions**: при пуше в `main` — `npm ci && npm run build` и деплой по SFTP на Timeweb).

Контент:

- работы — `src/content/portfolio/*.md` и файлы в `public/uploads/`;
- тексты и ссылки — `src/data/site.json`.

## Timeweb

- Включите SSL (Let’s Encrypt) для домена.
- Загрузите **содержимое** папки `dist/` в корень сайта (не саму папку `dist`).
- В `public/robots.txt` замените `YOUR-DOMAIN.ru` на ваш домен (строка `Sitemap:`).
- Переменная `PUBLIC_SITE_URL` при `npm run build` должна совпадать с реальным URL сайта (canonical, Open Graph, sitemap).

## SEO

В шаблоне уже есть: `canonical`, мета-описание, Open Graph, Twitter Card, JSON-LD `Person`, `sitemap-index.xml`. После запуска добавьте сайт в Яндекс.Вебмастер и Google Search Console.
