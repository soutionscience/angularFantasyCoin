import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-myteam',
  templateUrl: './myteam.component.html',
  styleUrls: ['./myteam.component.scss']
})
export class MyteamComponent implements OnInit {
  players: any[];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getPlayers()
  }
  getPlayers(){
    this.apiService.getSpecificResource('users', '5bd4501204162322bc3f8e1d')
    .subscribe(resp=>{
      this.players = resp;
      console.log(this.players)
    })
  }
  checkValue(now, prev){
    if(now-prev > 0 ){
      return true

    }else{
      return false
    }

  }

}
