# Fake-chat.js 📫
![Example №1](https://rah-emil.ru/img/fake-chat.js.jpg "Example №1")
**Fake-chat.js** is a handy chat emulator.

------------
### Instructions
Your html:
```html
<div id="chat"></div>
```
Your JavaScript:
```javascript
let chatjs = fakechat({
	target: document.getElementById('chat'),
	messages: [
		['Hello my friend!✌', 1000],
		['Looking for a plugin that simulates chat?', 3000],
		['You found it! - <b>Fake-chat.js</b>', 5000],
	],
	visible: true,
	adding: 'beforeend'
});

chatjs.init();
```

------------
### Parameters
| Parameter  | Type  | Value  |
| :------------ | :------------ | :------------ |
| target  | Object  | The DOM element where posts are posted.  |
| messages  | Array  | Array of messages, where 1 parameter is the message text, and 2 parameter is the message publication time.  |
| visible  | Boolean  | If true, then messages will be published only when the chat appears in the area. **Default false**. |
| adding  | String  | The order of publication of messages. [Where in relation to the element to insert the line. Only four options...](https://learn.javascript.ru/multi-insert "Where in relation to the element to insert the line. Only four options...") |
