# Fake-chat.js 📫
![Example №1](https://rah-emil.ru/img/fake-chat.js2.jpg "Example №1")
**Fake-chat.js** - это удобный эмулятор чата.

------------
### Подключение
CDN:
```html
<link rel="stylesheet" href="https://cdn.rah-emil.ru/fake-chat.js/fake-chat.min.css">
<script src="https://cdn.rah-emil.ru/fake-chat.js/fake-chat.min.js"></script>
```

Локально:
(https://github.com/rah-emil/fake-chat.js/tree/master/app "Скачать файлы")

------------
### Инструкция
Ваш html:
```html
<div id="mychat"></div>
```
Ваш JavaScript:
```javascript
let mychat = new FakeChat('#mychat', {
	messages: [
		{
			text: 'Hello my friend!✌',
			timer: 1000,
		},
		{
			text: 'Looking for a plugin that simulates chat?',
			timer: 3000,
		},
		{
			text: 'You found it! - <b>Fake-chat.js</b>',
			timer: 5000,
		},
	],
	visible: false,
	adding: 'beforeend',
	theme: {
		theme: 'timber',
		angle: 'square',
	},
	animation: {
		class: 'animation_class',
		function: 'animation_func',
	}
})
```

------------
### Темы
##### Цветовые решения:
- default *(по умолчанию)*
- timber
- amin
- citrus
- coral

##### Закругления:
- rounded *(по умолчанию)*
- square

------------
### Параметры
| Параметр  | Тип  | Значение  |
| :------------ | :------------ | :------------ |
| messages  | Array  | Массив сообщений, состоящий из объекта сообщения, где **text** - текст сообщения, а **timer** - время публикации сообщения.  |
| visible  | Boolean  | Если true, то сообщения начнут публиковаться только когда чат появится в области видимости. **По умолчанию false**. |
| adding  | String  | Порядок публикации сообщений. [Куда по отношению к elem вставлять строку. Всего четыре варианта...](https://learn.javascript.ru/multi-insert "Куда по отношению к elem вставлять строку. Всего четыре варианта...") |
| theme  | Object  | Объект, содержаший в себе **theme** (*по умочанию "default"*) - имя темы и **angle** - тип уголов (*по умочанию "rounded"*)  |
| animation  | Object  | Объект, содержаший в себе **class** - основной класс для анимируемого элемента и **function** - функция конкретной анимации  |
