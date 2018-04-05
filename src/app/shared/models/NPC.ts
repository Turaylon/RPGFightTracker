import {Character} from './Character';
import {NPCAttitude} from '../enums/NPCAttitude.enum';

export class NPC extends Character {
  public readonly attitude: NPCAttitude;
}
