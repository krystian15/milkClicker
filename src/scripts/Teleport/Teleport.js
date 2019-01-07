import CookieMakersFunctions from '../CookieMakersFunctions/CookieMakersFunctions.js';
import './Teleport.scss';

class Teleport extends CookieMakersFunctions{
  constructor(callback, eventToListen) {

    super(callback, eventToListen);

    this.props = {
      componentPrimary : 5,
      milkPerSecond : 0,
      cost: 10,
      count: 0,
      milkCount: 0
    }
    
    super.setProps(this.props);

  }
}

export default Teleport;
