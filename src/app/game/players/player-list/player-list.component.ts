import { Component, OnInit } from '@angular/core';
import {GameService} from '../../../shared/services/game.service';
import {Player} from '../../../shared/models/Player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  addNewPlayer(){
    this.gameService.addPlayer(new Player("Aria Stark",10,15));
  }

}
