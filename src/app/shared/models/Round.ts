import {Character} from './Character';
import {Action} from './Action';

export class Round {
  public actions: Action[];

  constructor(public owner: Character) {
  }

  public addAction(action: Action): Round {
    this.actions.push(action);
    return this;
  }
}
