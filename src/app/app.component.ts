import {Component, OnInit} from '@angular/core';
import {GameService} from './shared/services/game.service';
import {Player} from './shared/models/Player';
import {NPC} from './shared/models/NPC';
import {NPCAttitude} from './shared/enums/NPCAttitude.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    console.log(
      this.gameService
        .addPlayer(new Player('Aria Stark', 10, 15))
        .addPlayer(new Player('John Snow', 20, 9))
        .addNPC(new NPC('White Walker 1', 50, 5, NPCAttitude.HOSTILE))
        .startGame()
    );

  }
}
