import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueComponent } from '../league/league.component';
import {  Routes, RouterModule } from '@angular/router';

const routes: Routes=[
  {path: '', component: LeagueComponent}

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeagueComponent]
})
export class LeaguesModule { }
