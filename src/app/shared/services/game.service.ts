import {EventEmitter, Injectable} from '@angular/core';
import {Player} from '../models/Player';
import {NPC} from '../models/NPC';
import {Game} from '../models/Game';
import {Character} from '../models/Character';

@Injectable()
export class GameService {

  public game: Game;
  protected players: Player[] = [];
  protected npcs: NPC[] = [];

  private npcsChanged$: EventEmitter<Character[]>;
  private playersChanged$: EventEmitter<Character[]>;

  constructor() {
    this.npcsChanged$ = new EventEmitter<Character[]>();
    this.playersChanged$ = new EventEmitter<Character[]>();
  }

  public addPlayer(player: Player): GameService {
    this.players = [...this.players,player];
    this.playersChanged$.emit(this.players);
    return this;
  }

  public addNPC(npc: NPC): GameService {
    this.npcs = [...this.npcs,npc];
    this.npcsChanged$.emit(this.npcs);
    return this;
  }

  public startGame(): Game {
    return this.game = new Game(this.players,this.npcs);
  }

  public getPlayers() {
    return this.players;
  }



}




