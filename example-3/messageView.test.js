/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {

  document.body.innerHTML = fs.readFileSync('./index.html');
  const view = new MessageView();

  it('clicks the button', () => {
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
  });

  it('hides the message', () => {
    const buttonEl = document.querySelector('#hide-message-button');
    buttonEl.click();

    expect(document.querySelector('#message')).toBeNull();
  })
});