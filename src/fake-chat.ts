import delay from './utils/delay';

interface FakeChatMessage {
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

interface FakeChatOptions {
  /**
   * The order of adding messages to the wrapper
   */
  position?: InsertPosition;

  /**
   * Array of messages to publish
   */
  messages: FakeChatMessage[];
}

class FakeChat {
  public wrapper: HTMLElement | null;
  public options: FakeChatOptions;

  constructor(el: HTMLElement, options: FakeChatOptions) {
    this.wrapper = el;
    this.options = options;
  }

  public async init() {
    const ms = this.options.messages[0].delay ?? 1000;
    await this._appendMessage(ms);
  }

  private async _appendMessage(ms: number) {
    await delay(ms);

    const messageWrapper = document.createElement('div');
    const messageContent = document.createTextNode(this.options.messages[0].text);

    messageWrapper.appendChild(messageContent);

    try {
      this.wrapper?.insertAdjacentElement(this.options.position ?? 'beforeend', messageWrapper);
      this.options.messages.splice(0, 1);

      if(this.options.messages.length !== 0) {
        const ms = this.options.messages[0].delay ?? 1000;
        await this._appendMessage(ms);
      }
    } catch(err) {
      console.warn(err);
    }
  }
}

export default FakeChat;
