import Clicker from './Clicker/Clicker.js';
import Factory from './Factory/Factory.js';
import Teleport from './Teleport/Teleport.js';
import Cow from './Cow/Cow.js';
import MilkSaveData from './MilkSaveData/MilkSaveData.js';

import '../styles/index.scss';

class MilkClicker {

  constructor() {
    this.init();

    this.props = {
      milkCount: 0
    };
  }

  state = {
    clicker : false
  };


  milkController(value, action, data) {

    if (action === "remove") {
      this.props.milkCount -= value;
    } else {
      this.props.milkCount += value;
    }

    this.updateCounter();
  }

  updateCounter() {

    let {milkCount} = this.props;

    let milkClickerElement = document.querySelector('#MilkClicker');

    milkClickerElement.setAttribute('data-milk-count', Math.floor(milkCount));
  }

    sendMilkCount() {

      setInterval(()=> {
        let { milkCount} = this.props;
        let { factory, teleport, cow} = this.state;

        factory.setData(milkCount);
        teleport.setData(milkCount);
        cow.setData(milkCount);
      }, 1000);
    }

  init() {
    
    this.state.clicker = new Clicker((value, action, data) => this.milkController(value, action, data));
    this.state.cow = new Cow((value, action, data) => this.milkController(value, action, data), '#Cow');
    this.state.factory = new Factory((value, action, data) => this.milkController(value, action, data), '#Factory');
    this.state.teleport = new Teleport((value, action, data) => this.milkController(value, action, data), '#Teleport');
    this.state.milkSaveData = new MilkSaveData();
    this.sendMilkCount();
  }

}

new MilkClicker();
