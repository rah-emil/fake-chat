# Fake-chat
![npm bundle size](https://img.shields.io/bundlephobia/min/@rah-emil/fake-chat)
![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UCj5-dlnKYZ7O2HIYgP8urqw?style=flat)
[![](https://data.jsdelivr.com/v1/package/npm/@rah-emil/fake-chat/badge?style=rounded)](https://www.jsdelivr.com/package/npm/@rah-emil/fake-chat)
![npm](https://img.shields.io/npm/dm/@rah-emil/fake-chat)
![GitHub](https://img.shields.io/github/license/rah-emil/fake-chat)
![GitHub issues](https://img.shields.io/github/issues/rah-emil/fake-chat)

## Introduction

### Overview
JavaScript / TypeScript plugin for posting messages in your html code. It's project just for fun, for me

### Features
- posting messages with a selected delay

### Installation

#### NPM
To install fake-chat using npm, run the following command in your project's terminal:

```bash
npm install @rah-emil/fake-chat
```

#### CDN (jsDelivr)
You can also include fake-chat directly in your HTML file using a CDN like jsDelivr:

Add the following script tag to your HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/@rah-emil/fake-chat@3.0.1/dist/fake-chat.umd.js"></script>
```

Replace 3.0.1 with the version you want to use. You can find the latest version on the npm package page.

## Basic Usage
The plugin has typescript support!

```javascript
// or window.FakeChat, if you use UMD
import FakeChat from 'fake-chat';

// Select the container element
const chat = document.querySelector('#fake_chat');

// Define your chat options
const chatOptions = {
  // "afterbegin" | "afterend" | "beforebegin" | "beforeend" (default value)
  position: 'beforeend',
  messages: [
    { text: 'Hello!', delay: 1000 },
    { text: 'How are you?', delay: 1500 },
    // Add more messages as needed
  ],
};

// Create an instance of FakeChat and initialize it
const fakeChat = new FakeChat(chat, chatOptions);
fakeChat.init(); // async function
```
