class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');
    this.mainContainerEl = document.querySelector('#main-container');
    this.inputEl = document.querySelector('#message-input');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    });    
  }

  displayMessage() {
    let div = document.createElement('div');
    div.innerText = this.inputEl.value;
    div.id = 'message';
    this.mainContainerEl.append(div);
  }

  hideMessage() {
    const message = document.querySelector('#message');
    message.remove();
  };
}

module.exports = MessageView;