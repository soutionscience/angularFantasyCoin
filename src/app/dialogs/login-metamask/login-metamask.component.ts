import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/services/web3.service';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-metamask',
  templateUrl: './login-metamask.component.html',
  styleUrls: ['./login-metamask.component.scss']
})
export class LoginMetamaskComponent implements OnInit {
  coinBase: String
  challenge: String [];

  constructor(private web3Service: Web3Service,
    private apiService: ApiServiceService,
    private  dialogRef: MatDialogRef<LoginMetamaskComponent>) { }

  ngOnInit() {
    this.getCoinBase()
    console.log('what is coinbase ', this.coinBase)
  }

  getCoinBase(){
    this.web3Service.getCoinBase()
    .subscribe(resp=>{
      this.coinBase = resp
    })
  }


  login(){
   this.apiService.getSpecificResource('auth', this.coinBase)
   .subscribe(resp=>{
     this.challenge =resp
     console.log('what is the resp ', this.challenge)
     this.web3Service.signTransaction(this.challenge)
     .subscribe(resp=>{

       this.apiService.getTokenResource('auth',resp.nounce, resp.sign)
       .subscribe(resp=>console.log('am i geting token ', resp))
     })

   })
    this.close();

  }
  close(){
    this.dialogRef.close()
  }

}
