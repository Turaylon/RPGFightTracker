import {Injectable} from '@angular/core';
import {Player} from '../models/Player';
import {NPC} from '../models/NPC';
import {Game} from '../models/Game';

@Injectable()
export class GameService {

  public readonly players: Player[] = [];

  public readonly npcs: NPC[] = [];

  public game: Game;

  constructor() {

  }

  public addPlayer(player: Player): GameService{
    this.players.push(player);
    return this;
  }

  public addNPC(npc: NPC): GameService{
    this.npcs.push(npc);
    return this;
  }

  public startGame() : Game{
    let characters = [];
    this.players.forEach(player => characters.push(player));
    this.npcs.forEach(npc => characters.push(npc));
    return this.game = new Game(characters);
  }



}
