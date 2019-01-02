class FrontEndViewController {
  constructor(eventToLister) {

    this.eventToLister = eventToLister;

    this.init();
  }

  setEventListener() {
    this.elementToListenHTML = document.querySelector(this.eventToLister);

    this.elementToListenHTML.addEventListener('click', () => this.build());

    this.setComponentActionsEventListener();
  }

  setComponentActionsEventListener() {
    this.actions = document.querySelectorAll(`${this.eventToLister} .actions-panel button`);

    this.actions.forEach((element) => element.addEventListener('click', (event) => this.sendAction(event)));
  }


  sendAction(event) {
    this.build(event.target.dataset.action);
  }

  unsetEventListener(elementToremoveEventListener) {
    elementToremoveEventListener.removeEventListener('click', () => this.build());
  }

  updateInformation() {
    console.log('sdfdsfds');
  }

  init() {
    this.setEventListener();
  }
}

export default FrontEndViewController;
