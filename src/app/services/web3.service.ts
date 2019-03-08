import {
  Injectable
} from '@angular/core';
import Web3 from 'web3'
import {
  environment
} from '../../environments/environment';
import {
  bindNodeCallback,
  Observable,
  observable
} from 'rxjs';

// var json = require('./[yourFileNameHere].json');
// import * as campaignFactory from '../../ethereum/contracts/LeagueFactory.json';
declare var require: any

let campaignFactory = require('../../ethereum/contracts/LeagueFactory.json')
let leagueFactoryContract = require('../../ethereum/contracts/build/LeagueFactory.json');
let LeagueContract = require('../../ethereum/contracts/build/League.json')
 let account: String

declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  public web3: Web3;

  constructor() {
    this.checkAndInstatiateWeb3();
    // account = this.web3.eth.coinbase;
  }

  checkAndInstatiateWeb3 = () => {
    // console.log('what is in json??' , campaignFactory)
     // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined') {

      console.warn(
       'using metamsk detected'
      );
      // Use Mist/MetaMask's provider
      this.web3 = new Web3(window.web3.currentProvider);
      return this.web3;
    } else {
      console.warn(
        'No web3 detected'
      );
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      // needs to be changed to better fall back plan
      // this.web3 = new Web3();

      return null;
    }

  }
  checkMetamask():Observable<any>{
    return Observable.create(observer=>{
      if(typeof window.web3 !== 'undefined'){ //web 3 installed
        let accounts = this.web3.eth.coinbase

        if(accounts){ // if account is unlocked return 2
          observer.next(2)
          observer.complete()

        }else{
          observer.next(1)// no web3 installed
          observer.complete()

        }


      }else{
        observer.next(3)
        observer.complete()
      }

    })

  }
  // connect to test rpc for development
  connectRpc(url) {
    console.log("connecting to .. ", url)
    this.web3 = new Web3(new Web3.providers.HttpProvider(url))

  }
  getCoinBase() :Observable<any>{
    return Observable.create(observer=>{
      observer.next(this.web3.eth.coinbase)
      observer.complete()
    })
  }
  // get single account
  getSingle(): Observable < any > {
    return Observable.create(observer => {

    })
  }

  //get account number
  getAccounts(): Observable < any > {
    return Observable.create(observer => {
      this.web3.eth.getAccounts((err, accs) => {
        if (err != null) {
          observer.error('There was an error fetching your accounts.')
        }

        if (accs.length === 0) {
          observer.error('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.')
        }

        observer.next(accs)
        observer.complete()
      });
    })
  }


  // get balance of main account
  getAccountBalance(addrs): Observable < any > {
    return Observable.create(observer => {
      this.web3.eth.getBalance(addrs, (err, result) => {
        if (err) {
          observer.error('There was an error fetching your accounts.')
          observer.error(err)
        } else {
          observer.next(this.web3.fromWei(result, 'ether'));
          observer.complete();
        }
      })
    })
  }

  getBalance(account): Observable < any > {
    return Observable.create(observer => {
      // this.web3.eth.getBalance(account, (err, balance)=>{
      //   if(err){
      //     observer.error('there was an error fetching account balance')
      //   }
      //   observer.next(this.web3.fromWei(balance, 'ether'));
      //   observer.complete();
      // })
    })
  }

  // getContractInstance(): Observable<any>{
  //   return Observable.create( observer=>{
  //     new this.web3.eth.Contract(campaignFactory, process.env.ADDRESS)
  //     observer.complete();

  //   })
  // }
  // create a contract instance helper function.
  //used to createNewLeague and more...
  createContractInstance(addr, contractJson) {
    let instance;
    let abiDef = contractJson.abi
    let contract = this.web3.eth.contract(abiDef);
    instance = contract.at(addr);
    console.log('instance created', instance)
    return instance

  }
  getAllLeagues(addr, gasToUse): Observable < any > {
    return Observable.create(observer => {
      let instance = this.createContractInstance(addr, leagueFactoryContract);
      let transactionObject = {
        from: this.web3.eth.coinbase,
        gas: gasToUse
      }

      instance.GetAllLeagues.call(transactionObject, (err, result) => {
        if (err) {
          console.log('error getting leagues')
          observer.error(err)
        } else {
          console.log('got all leagues')
          observer.next(result);
          observer.complete()
        }

      })

    })
  }

  joinLeague(competion, addr, gasToUse): Observable < any > {
    return Observable.create(observer => {
      let instance = this.createContractInstance(addr, LeagueContract);
      let account = this.web3.eth.coinbase
      console.log('do we get accounts', account)
      let transactionObject = {
        from: account,
        gas: gasToUse


      }

      instance.joinCompetition
        .sendTransaction(competion, transactionObject, (err, resp) => {
          if (err) {
            console.log('error joining league')
            observer.error(err)
          } else {
            observer.next(resp)
            observer.complete()
          }

        })
    })

  }
  createComp(addr, value, gasToUse):Observable<any>{
    return Observable.create(observer=>{
  let instance = this.createContractInstance(addr, LeagueContract);

  let myValue = this.web3.toWei(value, 'ether')
  let transactionObject = {
    from: account,
    gas: gasToUse,
    value: value
  }
    })
  }
  //gets number of competions in a league
  getNumberOfCompetitions(addr): Observable<any>{
    return Observable.create(observer=>{
      let instance = this.createContractInstance(addr, LeagueContract)
      instance.getCompetitionCount.call((err,resp)=>{
       if(err){
      observer.error(err)
       }
       resp= resp.toNumber()
       observer.next(resp)
       observer.complete();
     })

    })



  }
  //gets all competions details in a league
  getAllCompetitons(addr, gasToUse, numOfLeagues): Observable<any> {
    return Observable.create(observer => {
      let instance = this.createContractInstance(addr, LeagueContract);
      let compe = [];
      for (let index = 0; index < numOfLeagues; index++) {
        instance.competitions.call(index, (err, resp) => {
          if (err) {
            console.log('error');
            observer.error(err)
          } else {
            let compeOBject = {
              id: resp[0],
              complete: resp[1],
              prize: this.web3.fromWei(resp[2], 'ether'),
              maxPlayers: resp[3],
              playerCount: resp[4]
            }
            compe.push(compeOBject)
          }
        })
       }
      observer.next(compe);
      observer.complete();
    })
  }
  joinCompetion(index, addr): Observable<any>{
    return Observable.create(observer=>{
      console.log('league address ', addr)
   let instance = this.createContractInstance(addr, LeagueContract);
   let account
   let transactionObject ={
    from: this.web3.eth.coinbase,
    gas: '1000000',


   }
instance.joinCompetition.sendTransaction(index, transactionObject, (err, resp)=>{
  if(err){
    observer.error(err)
  }else{
    observer.next(resp);
    observer.complete()
  }

})

})
  }


}
