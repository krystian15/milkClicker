import CookieMakersFunctions from '../CookieMakersFunctions/CookieMakersFunctions.js';
import './Factory.scss';

class Factory extends CookieMakersFunctions{
  constructor(callback, eventToLister) {

    super(callback, eventToLister);

    this.props = {
      cost: 5,
      count: 0,
      milkCount: 0
    }

  }
}

export default Factory;
