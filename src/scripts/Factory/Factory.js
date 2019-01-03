import CookieMakersFunctions from '../CookieMakersFunctions/CookieMakersFunctions.js';
import './Factory.scss';

class Factory extends CookieMakersFunctions{
  constructor(callback, eventToListen) {

    super(callback, eventToListen);

    this.props = {
      cost: 5,
      count: 0,
      milkCount: 0
    }

  }
}

export default Factory;
