# Fake-chat.js 📫
![Example №1](https://rah-emil.ru/img/fake-chat.js2.jpg "Example №1")
**Fake-chat.js** is a handy chat emulator.

------------
### Instructions
Your html:
```html
<div id="mychat"></div>
```
Your JavaScript:
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
### Parameters
| Parameter  | Type  | Value  |
| :------------ | :------------ | :------------ |
| messages  | Array  | Array of messages, where 1 parameter is the message text, and 2 parameter is the message publication time.  |
| visible  | Boolean  | If true, then messages will be published only when the chat appears in the area. **Default false**. |
| adding  | String  | The order of publication of messages. [Where in relation to the element to insert the line. Only four options...](https://learn.javascript.ru/multi-insert "Where in relation to the element to insert the line. Only four options...") |
| theme  | Object  | Includes "theme" and "angle".  |
| animation  | Object  | Includes "class" and "function".  |
