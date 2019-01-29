import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from '../welcome/welcome.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { LogosComponent } from '../logos/logos.component';
import { BannerComponent } from '../banner/banner.component';
import { LoginHorizontalComponent } from '../login-horizontal/login-horizontal.component';

const routes: Routes=[
  {path: '', component: WelcomeComponent, children:[
  {path:'teams', loadChildren: './teams.module#TeamsModule'},
  {path: 'myteam', loadChildren: './myteam.module#MyteamModule'},
  {path: 'leagues', loadChildren: './leagues.module#LeaguesModule'}
]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WelcomeComponent, MenuComponent, LogosComponent, BannerComponent, LoginHorizontalComponent]
})
export class WelcomeModule { }
