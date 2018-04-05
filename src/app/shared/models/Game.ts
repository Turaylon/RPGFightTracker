import {Phase} from './Phase';
import {Character} from './Character';
import {Round} from './Round';
import {Player} from './Player';
import {NPC} from './NPC';

export class Game {

  private _players: Player[] = [];
  private _npcs: NPC[] = [];
  protected phases: Phase[] = [];
  private _currentPhase: Phase;

  get npcs(): NPC[] {
    return this._npcs.slice();
  }

  get players(): Player[] {
    return this._players.slice();
  }

  get currentPhase(): Phase {
    return this._currentPhase;
  }

  public initGame(): Game {
    this._currentPhase = new Phase(this.getCharacters());
    return this;
  }

  public addPlayer(player : Player){
    this._players = [...this._players, player];
  }

  public addNPC(npc : NPC){
    this._npcs = [...this._npcs, npc];
  }

  public nextPhase(): Phase {
    // archive current fase
    this.phases = [...this.phases, this._currentPhase];

    this._currentPhase = new Phase(this.getCharacters());
    return this._currentPhase;
  }

  public getRound(goNext: boolean = true): Round {
    if (this.currentPhase.isCompleted()) {
      this.nextPhase();
    }
    let currentRound = this.currentPhase.currentRound;
    if (goNext) {
      this.currentPhase.nextRound();
    }
    return currentRound;
  }

  public getCharacters() : Character[]{
    return [...this.players,...this.npcs];
  }
}
