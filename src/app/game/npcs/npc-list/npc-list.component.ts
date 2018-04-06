import { Component, OnInit } from '@angular/core';
import {NPC} from '../../../shared/models/NPC';
import {GameService} from '../../../shared/services/game.service';
import {Player} from '../../../shared/models/Player';
import {NPCAttitude} from '../../../shared/enums/NPCAttitude.enum';

@Component({
  selector: 'app-npc-list',
  templateUrl: './npc-list.component.html',
  styleUrls: ['./npc-list.component.scss']
})
export class NpcListComponent implements OnInit {

  protected npcs : NPC[];

  constructor(private gameService: GameService) {
    this.gameService.npcsChanged$.subscribe(npc=>this.npcs = npc);
  }

  ngOnInit() {
  }

  addNewNPC(){
    this.gameService.addNPC(new NPC("White Walker",10,15, NPCAttitude.HOSTILE));
  }

  removeNPC(npc : NPC){
    this.gameService.removeNPC(npc);
  }

}
