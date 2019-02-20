import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueComponent } from '../league/league.component';
import {  Routes, RouterModule } from '@angular/router';
import { SelectedLeagueComponent } from '../selected-league/selected-league.component';

const routes: Routes=[
  {path: '', component: LeagueComponent}

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeagueComponent, SelectedLeagueComponent]
})
export class LeaguesModule { }
