/**
 * Fake-chat.js 1.0.0
 * Fake-chat.js is a handy chat emulator.
 * GitHub: https://github.com/rah-emil/fake-chat.js
 *
 * Copyright 2020 Rah Emil
 *
 * Released under the MIT License
 *
 * Released: August 10, 2020
 * Latest updates: August 10, 2020
 */

const fakechat = function fakechat(options) {

	const chat = options.target;
	let messages = options.messages,
		epos = options.adding || 'beforeend';

	function _startChat(options) {
		messages.forEach( (message, i) => {
			setTimeout( () => {
				chat.insertAdjacentHTML(epos, '<div class="message"><span>'+message[0]+'</span></div>');
			}, 1000 + message[1]);
		});
	}

	return {
		init(){

			/* Do I need to launch when there is an item on the home screen? */
			if( options.visible )
			{
				/* To avoid repetition */
				let repeatFunc = true;

				window.addEventListener('scroll', () => {

					/* Get position element */
					let elem_top = window.pageYOffset + chat.getBoundingClientRect().top,
						elem_bottom = window.pageYOffset + chat.getBoundingClientRect().bottom;

					/* Get position window */
					let window_top = window.pageYOffset,
						window_bottom = window.pageYOffset + document.documentElement.clientHeight;

					/* Check element visible */
					if( elem_bottom > window_top && elem_top < window_bottom )
					{
						if( repeatFunc )
						{
							repeatFunc = false;
							_startChat();
						}
						else
						{
							/* Destroy Listener */
							window.removeEventListener('scroll', this.scroll);
						}
					}

				});
			}
			else
			{
				_startChat();
			}

		},
	}
}