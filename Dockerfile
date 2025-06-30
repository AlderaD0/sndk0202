# Используем Node.js для работы с React
FROM node:18-alpine

WORKDIR /app

# Устанавливаем системные зависимости, необходимые для некоторых npm пакетов
RUN apk add --no-cache build-base python3

# Шаг 1: Копируем package.json и package-lock.json
# ЭТО КРИТИЧНО! Эти файлы нужны на этапе сборки для RUN npm install.
COPY package.json ./
COPY package-lock.json ./

# Шаг 2: Устанавливаем Node.js зависимости
RUN npm install

# Шаг 3: Копируем остальные файлы исходного кода.
COPY src ./src
COPY public ./public
COPY tailwind.config.js ./
COPY postcss.config.js ./
COPY src/reportWebVitals.js ./src/reportWebVitals.js

# Открываем порт 3000, который использует React Dev Server
EXPOSE 3000

# Команда по умолчанию для запуска React Dev Server.
# Эта CMD будет переопределена в docker-compose.yml на command: npm start.
CMD ["npm", "start"]