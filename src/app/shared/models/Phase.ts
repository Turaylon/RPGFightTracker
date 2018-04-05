import {Character} from './Character';
import {Round} from './Round';

export class Phase {

  private _currentRound : Round;
  protected rounds : Round[] = [];
  protected characters : Character[] = [];
  constructor(characters: Character[]) {
    this.characters = Phase.orderByInitative(characters);
    this._currentRound = new Round(this.characters[0]);
  }

  get currentRound(): Round {
    return this._currentRound;
  }

  public nextRound() : Round{
    this.rounds.push(this._currentRound);
    return this._currentRound = new Round(this.getNextCharacter());
  }

  /***
   * Check if every character has done his own round.
   * @returns {boolean}
   */
  public isCompleted(){
    return (this.rounds.length === this.characters.length) && this.characters.every(character => {
      return this.rounds.findIndex(round => round.owner.name === character.name) > -1;
    })
  }

  public getNextCharacter(): Character{
    return this.characters[this.indexOfCurrentCharacter() + 1];
  }

  protected indexOfCurrentCharacter(): number{
    return this.characters.indexOf(this._currentRound.owner);
  }

  static orderByInitative(characters : Character[]) : Character[]{
    return characters.sort((a,b)=>  b.initiative - a.initiative)
  }

}
