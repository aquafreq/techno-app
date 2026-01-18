# Bundlers & Build Configuration

## Текущо състояние

### Next.js вече използва Webpack! 🎉

**Важно:** Next.js автоматично използва Webpack под капака. Не е нужно да го инсталирате ръчно!

- ✅ **Development build**: `npm run dev` - използва Webpack в dev режим
- ✅ **Production build**: `npm run build` - оптимизиран Webpack build
- ✅ **Production server**: `npm run start` - стартира production build

## Какво е Bundler?

Bundler е инструмент, който:
- Комбинира множество файлове в по-малко файлове
- Минифицира и оптимизира кода
- Обработва TypeScript, CSS, изображения и др.
- Създава production-ready файлове

## Текущи опции в Next.js

### 1. Webpack (по подразбиране)
- ✅ Вече е инсталиран и конфигуриран
- ✅ Работи автоматично
- ✅ Пълна поддръжка на всички Next.js features
- ⚠️ По-бавен от Turbopack в development

### 2. Turbopack (опционално - по-бърз)
- ⚡ До 700x по-бърз от Webpack в development
- ✅ Официална поддръжка от Vercel
- ✅ Съвместим с всички Next.js features
- ⚠️ Все още в beta за production builds

## Dev vs Prod Builds

### Development Build (`npm run dev`)
```bash
npm run dev
# или
npm run dev:frontend
```

**Характеристики:**
- ⚡ Бърз hot reload
- 🔍 Source maps за debugging
- 📦 По-големи bundle sizes
- 🐛 Не минифициран код
- ✅ Горещо презареждане на промените

### Production Build (`npm run build`)
```bash
npm run build
# или
npm run build:frontend
```

**Характеристики:**
- 🚀 Оптимизиран и минифициран код
- 📦 По-малки bundle sizes
- ⚡ По-бързо зареждане
- 🔒 Tree shaking (премахва неползван код)
- ✅ Code splitting автоматично
- ✅ Image optimization
- ✅ CSS optimization

## Как да активираме Turbopack (опционално)

### Стъпка 1: Обновете Next.js до най-нова версия
```bash
cd frontend
npm install next@latest
```

### Стъпка 2: Използвайте Turbopack в dev режим
```bash
npm run dev --turbo
```

Или обновете `package.json`:
```json
{
  "scripts": {
    "dev": "next dev --turbo"
  }
}
```

## Конфигуриране на Webpack (ако е необходимо)

Ако имате нужда от специфична конфигурация, можете да редактирате `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Webpack конфигурация
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Добавете custom webpack конфигурация тук
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src'),
    }
    
    return config
  },
  
  // Оптимизации
  swcMinify: true, // Използва SWC за минификация (по-бързо от Terser)
  
  // Production оптимизации
  compress: true,
  poweredByHeader: false,
  
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  },
}

module.exports = nextConfig
```

## Кога да използвате custom Webpack конфигурация?

### Примери:
1. **Добавяне на custom loaders**
   - За специфични файлови типове
   - За обработка на SVG като React компоненти
   - За custom CSS препроцесори

2. **Alias конфигурация**
   - По-кратки import пътища
   - По-добра организация на кода

3. **Добавяне на plugins**
   - За специфични оптимизации
   - За анализа на bundle size

4. **Обработка на специфични зависимости**
   - За библиотеки, които не работят директно с Next.js

## Алтернативи на Webpack

### 1. Vite (за други проекти)
- ⚡ Много бърз development server
- ✅ Отлична поддръжка за React
- ❌ Не е толкова интегриран с Next.js
- 💡 Добър избор за чист React проекти

### 2. Turbopack (за Next.js)
- ⚡ Най-бърз за Next.js
- ✅ Официална поддръжка
- ✅ Съвместим с всички Next.js features
- 💡 Препоръчително за нови проекти

### 3. esbuild (за други проекти)
- ⚡ Много бърз bundler
- ✅ Отличен за малки проекти
- ❌ Не е толкова feature-rich като Webpack
- 💡 Добър за прости проекти

## Препоръки за вашия проект

### За сега (текущо състояние):
✅ **Използвайте стандартния Next.js setup**
- Webpack работи автоматично
- Dev и prod builds са готови
- Няма нужда от допълнителна конфигурация

### За бъдеще (ако искате по-бързо development):
🚀 **Активирайте Turbopack**
```bash
npm run dev --turbo
```

### Ако имате специфични нужди:
⚙️ **Конфигурирайте Webpack в `next.config.js`**
- Само ако наистина имате нужда
- За специфични loaders или plugins

## Проверка на Bundle Size

### Инсталирайте анализатор:
```bash
npm install --save-dev @next/bundle-analyzer
```

### Конфигурирайте в `next.config.js`:
```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
```

### Стартирайте анализа:
```bash
ANALYZE=true npm run build
```

## Заключение

**Не е нужно да добавяте Webpack ръчно!** Next.js вече го използва.

**Текущите команди са достатъчни:**
- `npm run dev` - Development build (Webpack)
- `npm run build` - Production build (оптимизиран Webpack)
- `npm run start` - Production server

**За по-бързо development:**
- Използвайте `--turbo` флаг за Turbopack

**За custom конфигурация:**
- Редактирайте `next.config.js` и добавете webpack функция
