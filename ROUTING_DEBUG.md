# Routing Debug Guide

## Проблем: Не може да навигира до `/kitchens-animated`

### Възможни причини:

1. **Кеширане на браузъра**
   - Решение: Hard refresh (Ctrl+Shift+R или Cmd+Shift+R)
   - Или изчистете кеша на браузъра

2. **Next.js dev server не е рестартиран**
   - Решение: Спрете dev server (Ctrl+C) и стартирайте отново:
   ```bash
   npm run dev:frontend
   ```

3. **Проблем с името на папката**
   - Next.js поддържа тирета в имената на папки
   - Проверете дали папката се казва точно `kitchens-animated` (не `kitchens_animated`)

4. **Проблем с файла**
   - Уверете се че файлът е `page.tsx` (не `Page.tsx` или друго)
   - Уверете се че файлът е в правилната папка: `frontend/src/app/kitchens-animated/page.tsx`

## Проверка:

1. Проверете дали файлът съществува:
   ```bash
   ls frontend/src/app/kitchens-animated/page.tsx
   ```

2. Проверете дали има грешки в конзолата:
   - Отворете Developer Tools (F12)
   - Проверете Console и Network табове

3. Проверете дали URL-ът се променя:
   - Кликнете на линка
   - Проверете дали URL-ът в браузъра се променя на `/kitchens-animated`

## Решения:

### Ако URL се променя но съдържанието не:
- Проблем с компонента - проверете за грешки в конзолата
- Проблем с CSS - проверете дали CSS файлът се зарежда

### Ако URL не се променя:
- Проблем с Link компонента
- Проблем с JavaScript - проверете дали има грешки

### Ако нищо не работи:
- Рестартирайте dev server
- Изчистете `.next` папката:
  ```bash
  rm -rf frontend/.next
  npm run dev:frontend
  ```
