import {EventEmitter, Injectable} from '@angular/core';
import {Player} from '../models/Player';
import {NPC} from '../models/NPC';
import {Game} from '../models/Game';
import {Character} from '../models/Character';

@Injectable()
export class GameService {

  private game: Game;

  public npcsChanged$: EventEmitter<Character[]>;
  public playersChanged$: EventEmitter<Character[]>;

  constructor() {
    this.npcsChanged$ = new EventEmitter<Character[]>();
    this.playersChanged$ = new EventEmitter<Character[]>();
    this.startGame();
  }

  public startGame(): Game {
    return this.game = new Game();
  }

  public getPlayers() {
    return this.game.players;
  }

  public addPlayer(player: Player): GameService {
    this.game.players = [...this.game.players, player];
    this.playersChanged$.emit(this.game.players.slice());
    return this;
  }

  public addNPC(npc: NPC): GameService {
    this.game.npcs = [...this.game.npcs, npc];
    this.npcsChanged$.emit(this.game.npcs);
    return this;
  }

  public removePlayer(player: Player) : GameService{
    let index = this.game.players.indexOf(player);
    if (index > -1) {
      this.game.players = this.game.players.filter((player,key) => key !== index );
      this.playersChanged$.emit(this.game.players.slice());
    }
    return this;
  }

  public removeNPC(npc: NPC) : GameService {
    let index = this.game.npcs.indexOf(npc);
    if (index > -1) {
      this.game.npcs = this.game.npcs.filter((npc,key) => key !== index );
      this.npcsChanged$.emit(this.game.npcs.slice());
    }
    return this;
  }

  public addCharacter<T extends Character>(character: T) : GameService{
    if(character instanceof Player){
      return this.addPlayer(character)
    }else if(character instanceof NPC){
      return this.addNPC(character)
    }else{
      throw new Error("Unsupported character type.")
    }
  }

  public removeCharacter<T extends Character>(character: T) : GameService{
    if(character instanceof Player){
      return this.removePlayer(character)
    }else if(character instanceof NPC){
      return this.removeNPC(character)
    }else{
      throw new Error("Unsupported character type.")
    }
  }


}




