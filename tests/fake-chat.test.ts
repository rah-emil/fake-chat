// @vitest-environment jsdom

import { expect, test, describe } from 'vitest';
import FakeChat from './../dist/fake-chat';


describe('Testing basic functionality', () => {
  test('Adding 1 message', async () => {
    const chat = document.createElement('div');
    document.body.appendChild(chat);
  
    const fakeChatOptions = {
      messages: [{ text: 'test', delay: 1000 }],
    };
    const fakeChat = new FakeChat(chat, fakeChatOptions);
  
    await fakeChat.init();
  
    const chatContent = chat.innerHTML;
    const expectedHTML = '<div>test</div>';
  
    expect(chatContent).toEqual(expectedHTML);
  });
  
  test('Adding 4 messages in 6 seconds', async () => {
    const chat = document.createElement('div');
    document.body.appendChild(chat);
  
    const fakeChatOptions = {
      messages: [
        { text: 'test1', delay: 1000 },
        { text: 'test2', delay: 1500 },
        { text: 'test3', delay: 1000 },
        { text: 'test4', delay: 1500 },
      ],
    };
    const fakeChat = new FakeChat(chat, fakeChatOptions);
  
    await fakeChat.init();
  
    const chatContent = chat.innerHTML;
    const expectedHTML = '<div>test1</div><div>test2</div><div>test3</div><div>test4</div>';
  
    expect(chatContent).toEqual(expectedHTML);
  });

  test('Adding 2 messages after begin', async () => {
    const chat = document.createElement('div');
    document.body.appendChild(chat);
  
    const fakeChatOptions = {
      position: 'afterbegin',
      messages: [
        { text: 'test1', delay: 1000 },
        { text: 'test2', delay: 1000 },
      ],
    };
    const fakeChat = new FakeChat(chat, fakeChatOptions);
  
    await fakeChat.init();

    
    const chatContent = chat.innerHTML;
    const expectedHTML = '<div>test2</div><div>test1</div>';
  
    expect(chatContent).toEqual(expectedHTML);
  });
});
