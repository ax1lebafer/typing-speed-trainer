# Typing Script Trainer

Проект задеплоен на https://ax1lebafer.github.io/typing-speed-trainer/

# Как запустить проект
- Установить зависимость командой npm i
- Команда для запуска проекта npm run dev
- Открыть проект в браузере

# Стек и инструменты
- Проект сделан на React (Vite) используя JSX шаблоны. 
- Для стилей в коде используются CSS Module. 
- Все компоненты разбиты по отдельным папкам.

# Функционал
- В качестве глобального хранилища используется Redux Toolkit
- Реализована генерация слов через библиотеку @faker-js
- Дан выбор таймера: 15, 30, 90, 120 секунд
- Рассчитывается кол-во слов в минуту, допущенные ошибки
- После истечения таймера показывается статистика