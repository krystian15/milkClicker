import FrontEndViewController from '../FrontEndViewController/FrontEndViewController';

class CookieMakersFunctions extends FrontEndViewController {

  constructor(callback, eventToListen) {

    super(eventToListen);

    this.callback = callback;

    this.componentControllerActionBuild = "buy";
    this.componentControllerActionSell = "sell";
  }

  shouldBuild() {
    return this.props.milkCount >= this.props.cost;
  }

  shouldSell() {
    return this.props.count >= 1;
  }

  updateCost(action) {
    action === this.componentControllerActionBuild ? this.props.cost *= this.props.count : this.props.cost /= this.props.count;
  }

  updateCount(action) {
    action === this.componentControllerActionBuild ? ++this.props.count : --this.props.count;
  }

  updateComponentMilkCountPerSec(milk) {
    this.props.milkPerSecond = Number((milk * 10).toFixed(2));
  }

  isActiveInterval() {
    return this.props.activeInterval;
  }

  shouldUnsetInterval() {
    return this.props.count === 0 && this.isActiveInterval();
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
    let milkMultipe = this.props.count * 0.02 * this.props.componentPrimary;

    this.updateComponentMilkCountPerSec(milkMultipe);

    return milkMultipe;
  }

  unsetInterval() {

    if (this.shouldUnsetInterval()) {
      clearInterval(this.props.interval);
    }
  }

  setData(milkCount) {
    this.props.milkCount = milkCount;
  }

  info() {
    console.log(this.props);
  }

  updateComponentParameters(action) {

    if (action === this.componentControllerActionBuild) {
      this.updateCount(action);
      this.updateCost(action);
    } else {
      this.updateCost(action);
      this.updateCount(action);
    }

    super.updateInformation();
  }

  componentController(action) {

    if (action === this.componentControllerActionBuild) {
      if (!this.shouldBuild()) {
        return;
      }

      this.callback(this.props.cost, 'remove');
      this.setInterval();

    } else {
      if (!this.shouldSell()) {
        return;
      }

      this.callback(this.props.cost, 'sell');
      this.unsetInterval();
    }

    this.updateComponentParameters(action);
    this.info();
  }

  setProps(props) {
    super.updateInformation();
  }

}

export default CookieMakersFunctions;
