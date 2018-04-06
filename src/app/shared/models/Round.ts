import {Character} from './Character';
import {Action} from './Action';

export class Round {
  private _actions: Action[];

  get actions(): Action[] {
    return this._actions;
  }
  set actions(value: Action[]) {
    this._actions = value;
  }

  constructor(public owner: Character) {
  }
}
