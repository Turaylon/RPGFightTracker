import {EventEmitter, Injectable} from '@angular/core';
import {Player} from '../models/Player';
import {NPC} from '../models/NPC';
import {Game} from '../models/Game';
import {Character} from '../models/Character';

@Injectable()
export class GameService {

  public game: Game;

  public charactersChanged : EventEmitter<Character[]>;

  constructor() {
    this.charactersChanged = new EventEmitter<Character[]>();
    this.game = new Game();
  }

  public addPlayer(player: Player): GameService{
    this.game.addPlayer(player);
    this.charactersChanged.emit(this.game.getCharacters());
    return this;
  }

  public addNPC(npc: NPC): GameService{
    this.game.addNPC(npc);
    this.charactersChanged.emit(this.game.getCharacters());
    return this;
  }

  public startGame() : Game{
    return this.game.initGame();
  }



}
