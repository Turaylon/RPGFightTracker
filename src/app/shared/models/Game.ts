import {Phase} from './Phase';
import {Character} from './Character';
import {Round} from './Round';

export class Game {
  get currentPhase(): Phase {
    return this._currentPhase;
  }
  protected phases: Phase[] = [];
  private _currentPhase : Phase;

  constructor(public characters: Character[]) {
    this._currentPhase = new Phase(characters);
  }

  public startNewGame(): void{
      this.phases = [];
      this._currentPhase = new Phase(this.characters)
  }

  public nextFase(): Phase{
    // archive current fase
    this.phases.push(this._currentPhase);

    this._currentPhase = new Phase(this.characters)
    return this._currentPhase;
  }

  public getRound(goNext: boolean = true): Round{
    if(this.currentPhase.isCompleted()){
      this.nextFase();
    }
    let currentRound = this.currentPhase.currentRound;
    if(goNext){
      this.currentPhase.nextRound();
    }
    return currentRound;
  }
}
