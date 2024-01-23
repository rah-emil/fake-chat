// @vitest-environment jsdom

import { expect, test } from 'vitest';
import FakeChat from './../dist/fake-chat.mjs';


test('append one message', async () => {
  const chat = document.createElement('div');
  document.body.appendChild(chat);

  const fakeChatOptions = {
    messages: [{ text: 'test' }],
  };
  const fakeChat = new FakeChat(chat, fakeChatOptions);

  await fakeChat.init();

  const chatContent = chat.innerHTML;
  const expectedHTML = '<div>test</div>';

  expect(chatContent).toEqual(expectedHTML);
});
