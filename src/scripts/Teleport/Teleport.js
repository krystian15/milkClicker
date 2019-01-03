import CookieMakersFunctions from '../CookieMakersFunctions/CookieMakersFunctions.js';
import './Teleport.scss';

class Teleport extends CookieMakersFunctions{
  constructor(callback, eventToListen) {

    super(callback, eventToListen);

    this.props = {
      cost: 10,
      count: 0,
      milkCount: 0
    }
  }
}

export default Teleport;
