import {Bonus} from './Bonus';
import {Malus} from './Malus';


export abstract class Character {
  public bonuses: Bonus[] = [];
  public maluses: Malus[] = [];
  public initiative: number = 0;

  constructor(public name : string, public vitalPoints: number, initiative = 0)  {
      this.initiative = initiative;
  }
}
