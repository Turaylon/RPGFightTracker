import {Character} from './Character';

export abstract class Effect {
  constructor(public name: string, public duration: number, public target: Character) {

  }
}
