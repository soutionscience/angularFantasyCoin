import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Web3Service } from '../services/web3.service';
import {factoryAddress, factoryAddress2} from '../shared/baseAddress'

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {
  leagues: String [];
  league: String;

  constructor(private web3Service: Web3Service, private ref : ChangeDetectorRef) { }

  ngOnInit() {
    this.getLeagues()
  }
  getLeagues(){
    this.web3Service.getAllLeagues(factoryAddress, '1000000')
    .subscribe(resp=>{
      this.leagues = resp;
      this.ref.detectChanges();
    })

  }
  selectLeague(l){
    console.log('selected league ', l)
    this.league = l;
    this.ref.detectChanges();
  }

}
