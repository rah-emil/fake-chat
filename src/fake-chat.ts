export interface FakeChatOptions {
  username: string;
}

export class FakeChat {
  private options: FakeChatOptions;

  constructor(options: FakeChatOptions) {
    this.options = options;
  }

  test() {
    console.log('options', this.options);
  }
}



