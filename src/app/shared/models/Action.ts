import {Effect} from './Effect';

export class Action {
  protected effects: Effect[];

  constructor(public description) {

  }
}
