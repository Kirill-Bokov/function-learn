# function learn()

function learn() — учебный проект, созданный в рамках производственной практики от ВУЗа.  
Цель проекта — разработка двуязычного (русский/английский) учебника по frontend с рекомендациями от GigaChat API.

## Стек технологий

react ^19.1.0  
react-dom ^19.1.0  
react-router-dom ^7.6.2  
react-markdown ^10.1.0  
react-error-boundary ^6.0.0  
Requestly для моков и эмуляции ошибок  
GigaChat API через локальный сервер для генерации рекомендаций

## Возможности проекта

Двуязычный интерфейс (RU/EN)  
Поиск и фильтрация тем  
Рекомендации по frontend из GigaChat  
Пример использования ErrorBoundary для обработки ошибок  
Пример использования Requestly для тестирования HTTP-ошибок  
Использование react-markdown для рендеринга контента  
Роутинг через react-router-dom

## Локальный запуск

```bash
git clone https://github.com/your-username/function-learn.git
cd function-learn
npm install
npm run dev
