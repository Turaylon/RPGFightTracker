import {Phase} from './Phase';
import {Character} from './Character';

export class Game {
  protected phases: Phase[];
  private currentPhase: Phase;

  constructor(private players, private npcs){
    this.currentPhase = new Phase(this.getCharacters())
  }

  public getCharacters(): Character[] {
    return [...this.players, ...this.npcs];
  }

}
