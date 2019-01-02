import CookieMakersFunctions from '../CookieMakersFunctions/CookieMakersFunctions.js';
import './Teleport.scss';

class Teleport extends CookieMakersFunctions{
  constructor(callback, eventToLister) {

    super(callback, eventToLister);

    this.props = {
      cost: 10,
      count: 0,
      milkCount: 0
    }
  }
}

export default Teleport;
