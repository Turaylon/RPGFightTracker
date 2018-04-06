import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {GameService} from './shared/services/game.service';
import { GameComponent } from './game/game.component';
import { PlayerListComponent } from './game/players/player-list/player-list.component';
import { PlayerComponent } from './game/players/player/player.component';
import { NpcListComponent } from './game/npcs/npc-list/npc-list.component';
import {NpcComponent} from './game/npcs/npc/npc.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    PlayerListComponent,
    PlayerComponent,
    NpcListComponent,
    NpcComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
