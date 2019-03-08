import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class BrowserDetectionService {



  constructor() { }

  detectBrowser():Observable<any>{
    return Observable.create(observer=>{
      if((!! window['opr'] && !!window['opr'].addons) || !!window['opera'] || navigator.userAgent.indexOf(' OPR/') >= 0){
        observer.next('isOpera')
        observer.complete();

      }
      if(typeof window['InstallTrigger'] !== 'undefined'){
        observer.next('isFireFox')
        observer.complete()

      }
      if(!window['safari'] || window['safari'].pushNotification){
        observer.next('isSafari')
        observer.complete()
      }
      if(!!window['chrome'] && !!window['chrome']['webstore']){
        observer.next('isChrome')
        observer.complete()

      }else{
        observer.next('unKnown')
        observer.complete()
      }

    })
  }
}
