export interface FakeChatMessage {
  /**
   * Text of message
   */
  text: string;

  /**
   * Posting time after the previous one
   */
  delay: number;

  /**
   * Class names of message
   */
  className?: string;
}

export interface FakeChatOptions {
  /**
   * The order of adding messages to the wrapper
   */
  position?: InsertPosition;

  /**
   * Array of messages to publish
   */
  messages: FakeChatMessage[];
}

export class FakeChat {
  private wrapper: HTMLElement | null;
  private options: FakeChatOptions;

  constructor(el: string, options: FakeChatOptions) {
    this.wrapper = document.querySelector(el);
    this.options = options;

    this._init();
  }

  private _init() {
    const ms = this.options.messages[0].delay ?? 1000;
    this._appendMessage(ms);
  }

  private _appendMessage(ms: number) {
    setTimeout(() => {
      const messageWrapper = document.createElement('div');
      const messageContent = document.createTextNode(this.options.messages[0].text);

      messageWrapper.appendChild(messageContent);

      try {
        this.wrapper?.insertAdjacentElement(this.options.position ?? 'afterend', messageWrapper);
        this.options.messages.splice(0, 1);

        if(this.options.messages.length !== 0) {
          const ms = this.options.messages[0].delay ?? 1000;
          this._appendMessage(ms);
        }
      } catch(err) {
        console.warn(err);
      }
    }, ms);
  }
}
