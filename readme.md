# React Boilerplate 

В данном бойлерплейте установлен и настроен webpack для продакшн, дев окружения. В качестве стейт-менеджра используется [effector](http://effector.dev). 

Настроено юнит тестирование через Mocha, интеграционное тестирование через enzyme.

Разработка с использованием данного бойлерплейта наиболее хорошо подходит для архитектуры featured-slices. 

## Используемые пакеты

- React 16.9.x
- Typescript 
- Webpack 4
- Babel  
- StyledComponents 
- Effector 

## Запуск dev среды 

npm start

## Билд

npm run build

## Конфигурация

- webpack.dev.config.js - dev среда
- webpack.prod.config.js - prod среда
- webpack.test.config.js - test среда

## Команды 

- `npm run lint` Запуск eslint 
- `npm run lint:fix` Запуск фиксов eslint 
- `npm run test` Запуск тестов через Mocha 

