import CookieMakersFunctions from '../CookieMakersFunctions/CookieMakersFunctions.js';
import './Cow.scss';

class Cow extends CookieMakersFunctions {
  constructor(callback, eventToListen) {

    super(callback, eventToListen);

    this.props = {
      componentPrimary: 2,
      milkPerSecond: 0,
      cost: 5,
      count: 0,
      milkCount: 0
    }

    super.setProps(this.props);
  }
}

export default Cow;
