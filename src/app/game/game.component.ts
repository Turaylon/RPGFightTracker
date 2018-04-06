import {Component, OnInit} from '@angular/core';
import {GameService} from '../shared/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public error: string;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
  }

  startGame() {
    try {
      this.gameService.startGame();
    } catch (e) {
      this.error = e.message;
    }
  }

}
