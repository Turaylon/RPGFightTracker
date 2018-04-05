import {Character} from './Character';
import {NPCAttitude} from '../enums/NPCAttitude.enum';

export class NPC extends Character {
  public readonly attitude: NPCAttitude;

  constructor(name: string, vitalPoints: number, initiative: number, attitude: NPCAttitude) {
    super(name, vitalPoints, initiative);
    this.attitude = attitude;
  }
}
