# generator-front-core [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> 

## Подготовка
1. Установить Node JS 9.0.0+

## Генератор приложения
1. Установить [Yeoman](http://yeoman.io) и наш генератор [generator-front-core](https://github.com/kinjeiro/generator-front-core)
```
npm i -g yo generator-front-core
```
2. Создатей пустую папку с проектом и внутри нее запустить генерацию проекта
```
yo front-core    
```
Вам зададут ряд вопросов. Самый главный: как подключить корные библиотеки 
- либо использовать ключ для private npm репозитория вида ```LtPoPitN+ORS2NczScMn2OYCk8U2t2uY/Pux2S0vCkl=```, который используется в ```.npmrc```:
```
registry=http://npm.reagentum.ru/
//npm.reagentum.ru/:_authToken="LtPoPitN+ORS2NczScMn2OYCk8U2t2uY/Pux2S0vCkl="
```
- либо локально использовать скомпилированные версии библиотек. Их можно получить запустив внутри корных компонентов скрипт```npm run minimized``` и взяв из папки ```/minimizedPackage``` результат.

3. Создание модуля
```
yo front-core:module
```
4. Запуск
```
npm run start
```

5. [Заходим на http://localhost:8080](http://localhost:8080)
По умолчанию включены моки и для моков есть несколько тестовых пользователей:
```
ivanovI@local.com \ 123456
korolevaU@local.com \ 123456
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

Apache-2.0 © [Andrey Kuzmin]()


[npm-image]: https://badge.fury.io/js/generator-front-core.svg
[npm-url]: https://npmjs.org/package/generator-front-core
[travis-image]: https://travis-ci.org/Kinjeiro/generator-front-core.svg?branch=master
[travis-url]: https://travis-ci.org/Kinjeiro/generator-front-core
[daviddm-image]: https://david-dm.org/Kinjeiro/generator-front-core.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Kinjeiro/generator-front-core
