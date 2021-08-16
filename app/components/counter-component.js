import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { toLeft, toRight } from 'ember-animated/transitions/move-over';
import { action } from '@ember/object';

export default class CounterComponent extends Component {
  @tracked counter = 10;

  @action
  increment() {
    this.counter = this.counter + 1;
  }

  @action
  decrement() {
    this.counter = this.counter - 1;
  }

  rules({ oldItems, newItems }) {
    if (oldItems[0] < newItems[0]) {
      return toLeft;
    } else {
      return toRight;
    }
  }


}
