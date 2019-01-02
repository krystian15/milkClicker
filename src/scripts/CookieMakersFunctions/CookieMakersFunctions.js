import FrontEndViewController from '../FrontEndViewController/FrontEndViewController';

class CookieMakersFunctions extends FrontEndViewController{

  constructor(callback, eventToLister) {

    super(eventToLister);

    this.callback = callback;
  }

  shouldBuild() {
    return this.props.milkCount >= this.props.cost;
  }

  updateCost() {
    this.props.cost *= this.props.count;
  }

  updateCount() {
    ++this.props.count;
  }

  isActiveInterval() {
    return this.props.activeInterval;
  }

  setInterval() {
    if (this.isActiveInterval()) {
      return;
    }

    this.props.interval = setInterval(() => {
      this.callback(this.productionMultipler(), 'add');
    }, 100);
  }

  productionMultipler() {
    return this.props.count * 0.02;
  }

  unsetInterval() {
    clearInterval(this.props.interval);
  }

  setData(milkCount) {
    this.props.milkCount = milkCount;
  }


  info() {
    //console.log(this.props);
  }

  build(action) {


    if (!this.shouldBuild()) {
      return;
    }

    this.callback(this.props.cost, 'remove');

    this.updateCount();
    this.updateCost();
    super.updateInformation();

    this.setInterval();

    this.info();

  }
}

export default CookieMakersFunctions;
