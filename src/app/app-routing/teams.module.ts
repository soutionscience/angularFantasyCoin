import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from '../teams/teams.component';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from '../players/players.component';

const routes: Routes =[
  {path: '', component: TeamsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TeamsComponent, PlayersComponent]
})
export class TeamsModule { }
