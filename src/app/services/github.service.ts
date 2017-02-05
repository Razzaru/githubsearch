import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username: string;
  private client_id = '5aacf38914229eac456b';
  private client_secret = '24d020df6ef0e3000393dd56d7aa2d0090027be3';

  constructor(private _http: Http) {
    console.log('Github Service Ready...');
    this.username = 'Razzaru';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
  }

  getRepos() {
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
  }

  updateUser(username: string) {
    this.username = username;
  }
}
