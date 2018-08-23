import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private restangular: Restangular) { }

  getResource(apiRoute):Observable<any[]>{
    return this.restangular.all(apiRoute).getList()

  }
  getTeams(apiRoute, teamCode): Observable<any[]>{
    return this.restangular.all(apiRoute).getList({team_code: teamCode})
  }
}
