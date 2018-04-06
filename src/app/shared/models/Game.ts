import {Phase} from './Phase';
import {Character} from './Character';

export class Game {
  protected phases: Phase[];
  private currentPhase: Phase;

  constructor(public players = [], public npcs = []){
  }

  public getCharacters(): Character[] {
    return [...this.players, ...this.npcs];
  }

}
