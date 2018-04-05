import {Character} from './Character';
import {Round} from './Round';

export class Phase {
  protected currentRound : Round;
  protected rounds : Round[];
  protected characters : Character[];
  constructor(characters: Character[]) {
    this.characters = Phase.orderByInitative(characters);
  }

  public nextRound() : Round{
    this.rounds.push(this.currentRound);
    return this.currentRound = new Round(this.getNextCharacter());
  }

  /***
   * Check if every character has done his own round.
   * @returns {boolean}
   */
  public isCompleted(){
    return this.characters.every(character => {
      return this.rounds.findIndex(round => round.owner.name === character.name) > -1;
    })
  }

  public getNextCharacter(): Character{
    return this.characters[this.indexOfCurrentCharacter()];
  }

  protected indexOfCurrentCharacter(): number{
    return this.characters.indexOf(this.currentRound.owner);
  }

  static orderByInitative(characters : Character[]) : Character[]{
    return characters.sort((a,b)=> a.initiative - b.initiative)
  }

}
