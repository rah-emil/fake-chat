/**
 * Fake-chat.js 2.0.0
 * Fake-chat.js is a handy chat emulator.
 * GitHub: https://github.com/rah-emil/fake-chat.js
 *
 * Copyright 2020 Rah Emil
 *
 * Released under the MIT License
 *
 * Released: August 10, 2020
 * Latest updates: August 11, 2020
 */

class FakeChat {

	constructor(selector, options) {
		this.$chat = document.querySelector(selector),
		this.options = options,

		this._init()
	}

	_init() {

		const { messages, visible, adding, theme } = this.options;
		
		/* Do I need to launch when there is an item on the home screen? */
		if( visible )
		{
			/* To avoid repetition */
			let repeatFunc = true;

			window.addEventListener('scroll', () => {

				/* Get position element */
				let elem_top = window.pageYOffset + this.$chat.getBoundingClientRect().top,
					elem_bottom = window.pageYOffset + this.$chat.getBoundingClientRect().bottom;

				/* Get position window */
				let window_top = window.pageYOffset,
					window_bottom = window.pageYOffset + document.documentElement.clientHeight;

				/* Check element visible */
				if( elem_bottom > window_top && elem_top < window_bottom )
				{
					if( repeatFunc )
					{
						repeatFunc = false;
						this.outputMessages();
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
			this.outputMessages();
		}

	}

	outputMessages() {
		try{
			this.options.messages.forEach( (message, i) => {
				setTimeout( () => {
					this.$chat.insertAdjacentHTML(this.options.adding ?? 'beforeEnd', 
						`<div class="fakechat fakechat_${this.options.theme ? this.options.theme.theme ?? 'default' : 'default'} fakechat_${this.options.theme ? this.options.theme.angle ?? 'rounded' : 'rounded'} ${this.options.animation ? this.options.animation.class ?? '' : ''} ${this.options.animation ? this.options.animation.function ?? '' : ''}"><span>${message.text}</span></div>`
						);
				}, 1000 + message.timer);
			});
		}
		catch(err){
			console.warn(err);
		}
	}
} 