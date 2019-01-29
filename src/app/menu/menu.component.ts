import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../services/web3.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  accountBal: String;
  accountBalCheck: Boolean;
  accounts: any [];
  user: String;
  userCheck: Boolean;
  trpcURL: String;
  

  constructor(private web3Service: Web3Service) { 
    this.accountBal ='show account balance';
    this.trpcURL ="http://localhost:8545";
   
     this.userCheck = true;
    //  this.getAccounts();
 
 
   
  }

  ngOnInit() {
   // this.accounts = [];
   this.accountBal ='show account balance'
   
  
  
  }
  // ngAfterViewChecked(){
  //   this.getAccounts()

  // }
  getAccounts(){
    this.web3Service.getAccounts()
    .subscribe(resp=>{
      this.accounts = resp;
      this.user = this.accounts[0];
      this.user=this.user.slice(0,10)
      console.log('user', this.user)
      this.web3Service.getAccountBalance(this.accounts[0])
      .subscribe(resp=>{
        this.accountBal= resp.toString();
        this.accountBal = this.accountBal.slice(0,10)
        console.log('balance ',   this.accountBal)
    
      
      })
     
    })
    
  }
  //dev function login
  login(){
    console.log('loggin in ', this.accountBal)
  }
  testRPC(){
    this.web3Service.connectRpc( this.trpcURL )
    this.getAccounts()
   
  }



}
