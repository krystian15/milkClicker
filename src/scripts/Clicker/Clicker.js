import './Clicker.scss';
class Clicker {
  constructor(callback) {
    this.callback = callback;
    this.init();
  }

  init() {
    let milkClickerElement = document.querySelector('#MilkClicker');

    milkClickerElement.addEventListener('click', () => {
      this.callback(1);
    });
  }
}

export default Clicker;
