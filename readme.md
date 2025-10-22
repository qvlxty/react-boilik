# ⚛ React Typescript Boilik

Бойлерплейт для быстрого старта разработки на стеке react/effector/styled-components.

## Package out of box

### Для разработки
- ⚛ React v19
- ☄️ Effector v23
- 💅 StyledComponents v6
- react-router v7.9

### Для сборки / рантайма
- Webpack v5
- Typescript 5
- Babel 7

## Скрипты

`start` - Запуск dev окружения

`build` - Сборка

`lint` - Проверка кода линтером

`lint:fix` - Автофикс через линтер

## Конфигурация и особенности

- Стартовую конфигурацию вы найдете в .env.example

- Конфиг лоадеров находится отдельно, так как он чаще всех настраивается в процессе разработки

- Импорты для встроенных лоадеров уже затипизированы в declaration/index.d.ts

- **BACKEND_HOST** используется в конфигурации. Если хотите использовать прокси (обход CORS для дев. окружения), раскомментируйте настройку в webpack.dev.ts

- Все env переменные автоматически загружаются через environment-plugin из файла .env по-умолчанию. Для настройки - исправьте webpack.base.ts Environment Plugin.

- Для импорта SVG используется лоадер **svgr**,он также сконфигурирован таким образом, что вы сможете получить также url svg файла:

```ts
import SvgComponent from '@/ui/assets/icon.svg' // SvgComponent
import SvgRelativePath from '@/ui/assets/icon.svg?url' // string
```


## Dockerfile

В данном бойлерплейте уже имеется Dockerfile для удобной сборки на удаленном сервере или облачном раннере. Для создания образа и запуска контейнера используйте следующие команды:

`docker build -t my-image .`

`docker run -it --name web-frontend -p 8081:8081 -d my-image`
