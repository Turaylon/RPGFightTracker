import {Bonus} from './Bonus';
import {Malus} from './Malus';


export abstract class Character {
  protected bonuses: Bonus[] = [];
  protected maluses: Malus[] = [];

  constructor(public name, public vitalPoints) {

  }
}
