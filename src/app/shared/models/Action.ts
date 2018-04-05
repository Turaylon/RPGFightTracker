import {Effect} from './Effect';

export class Action {
  protected effects: Effect[];

  constructor(public description) {

  }

  public addEffect(effect: Effect) {
    this.effects.push(effect);
    return this;
  }
}
