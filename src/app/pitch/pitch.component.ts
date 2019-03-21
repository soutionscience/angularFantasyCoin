import { Component, OnInit, Input } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-pitch',
  templateUrl: './pitch.component.html',
  styleUrls: ['./pitch.component.scss']
})
export class PitchComponent implements OnInit {
  @Input() teamPlayers: any [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    // this.completeTeam()
  }
  completeTeam(){
    console.log(this.teamPlayers)

  }
  complete(){
    if(this.teamPlayers.length<=11){
      return true
    }else{
      return false
    }
  }
  submit(){
    console.log('submiting teams');

  }

}
