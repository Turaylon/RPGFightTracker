import { Component, OnInit } from '@angular/core';
import {GameService} from '../../../shared/services/game.service';
import {Player} from '../../../shared/models/Player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  protected players : Player[];

  constructor(private gameService: GameService) {
    this.gameService.playersChanged$.subscribe(players=> this.players = players);
  }

  ngOnInit() {
  }

  addNewPlayer(){
    this.gameService.addPlayer(new Player("Aria Stark",10,15));
  }

  removePlayer(player : Player){
    this.gameService.removePlayer(player);
  }

}
