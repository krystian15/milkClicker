class FrontEndViewController {
  constructor(eventToListen) {
    this.eventToLister = eventToListen;
    this.init();
  }

  setEventListener() {
    this.setComponentActionsEventListener();
    this.setComponentInformationEventListener();
  }

  setComponentActionsEventListener() {

    this.actions = document.querySelectorAll(`${this.eventToLister} .actions-panel button`);
    this.actions.forEach((element) => element.addEventListener('click', (event) => this.sendAction(event)));
  }

  setComponentInformationEventListener() {
    this.count = document.querySelector(`${this.eventToLister} .count`);
    this.milkPerSecond = document.querySelector(`${this.eventToLister} .milk-per-sec`);
    this.price = document.querySelector(`${this.eventToLister} .price`);
  }

  sendAction(event) {
    this.componentController(event.target.dataset.action);
  }

  unsetEventListener(elementToremoveEventListener) {
    elementToremoveEventListener.removeEventListener('click', () => this.componentController());
  }

  updateInformation() {
    this.count.innerText = this.props.count;
    this.milkPerSecond.innerText = this.props.milkPerSecond;
    this.price.innerText = this.props.cost;
  }

  init() {
    this.setEventListener();
  }

}

export default FrontEndViewController;
