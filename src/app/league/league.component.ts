import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../services/web3.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
  leagues: String [];

  constructor(private web3Service: Web3Service) { }

  ngOnInit() {
    this.getLeagues()
  }
  getLeagues(){
    this.web3Service.getAllLeagues('0xde4973d1d1c741916f283cde758cbb4eba6c032e', '1000000')
    .subscribe(resp=>{
      this.leagues = resp;
    })
  }
  selectLeague(l){
    console.log('selected league ', l)
  }

}
