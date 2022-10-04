import { makeObservable, observable } from 'mobx';

class Info {
  person = {
    name: 'MJ Kim',
    job: 'Frontend',
  };
  device = 'MacBook';
  subTitle = 'React 최적화';

  constructor() {
    makeObservable(this, {
      person: observable,
      device: observable,
      subTitle: observable,
    });
  }
}

const infoStore = new Info();
export default infoStore;
