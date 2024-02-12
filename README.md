# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

# Базовые классы

## Класс EventEmitter
Базовый класс, суть которого заключается в том, чтобы дать возможность с любого места в нашем приложении сообщить о каком-либо событии. Все, кто были «подписаны» на это событие сразу же об этом узнают и как-то отреагируют.

Методы класса:
- on - устанавливает обработчик на событие
- off - сбрасывает обработчик с события
- emit - инициирует событие с данными
- onAll - устанавливает обработчик на **все** события
- offAll - сбрасывает обработчик на **всех** событиях
- trigger - устанавливает коллбэк-триггер, генерирующий заданное событие при вызове

## Класс Api
Базовый класс для работы с API, который работает с базовыми HTTP-методами обращения к серверу **GET/POST/PUT/DELETE**.

Методы класса:
- handleResponse - обрабатывает ответы сервера, преобразуя их в данные формата json или выдавая ошибки
- get - выполняет **GET-запросы** на сервер
- post - выполняет запрос с использованием предоставленого метода **POST/PUT/DELETE**

## Класс Model<T>
Базовый класс, предназначенный для создания моделей данных, предназначенных для управления данными приложения.

Методы:
- emitChanges - сообщает всем подписчикам, что модель поменялась

## Класс Component<T>
Базовый класс отрисовки пользовательского интерфейса, а также обеспечивающий инструментарий для работы с DOM-элементами в дочерних компонентах.

Методы:
- toggleClass - переключает класс компонента
- setText - устанавливает текстовое содержимое для компонента
- setDisabled - меняет статус блокировки компонента
- setHidden - скрывает компонент
- setVisible - делает компонент видимым
- setImage - устанавливает для компонента изображение с альтернативным текстом
- render - возвращает корневой DOM-элемент

# Компоненты модели данных

# Компоненты представления

## Класс Basket

## Класс Form

## Класс Modal

## Класс Success

## Класс Card

## Класс Order

## Класс Page