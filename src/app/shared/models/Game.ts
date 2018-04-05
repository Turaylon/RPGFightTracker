import {Phase} from './Phase';
import {Character} from './Character';

export class Game {
  protected phases: Phase[] = [];
  protected currentPhase : Phase;

  constructor(public characters: Character[]) {
  }

  public startNewGame(): void{
      this.phases = [];
      this.currentPhase = new Phase(this.characters)
  }

  public nextFase(): Phase{
    // archive current fase
    this.phases.push(this.currentPhase);

    this.currentPhase = new Phase(this.characters)
    return this.currentPhase;
  }
}
