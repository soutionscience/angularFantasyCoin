import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyteamComponent } from '../myteam/myteam.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
  {path: '', component: MyteamComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyteamComponent]
})
export class MyteamModule { }
