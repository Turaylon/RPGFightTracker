import {Injectable} from '@angular/core';
import {Player} from '../models/Player';
import {NPC} from '../models/NPC';

@Injectable()
export class GameService {

  protected players: Player[];

  protected npcs: NPC[];

  constructor() {
  }

}
