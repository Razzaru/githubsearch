import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { client_id, client_secret } from '../../env';

@Injectable()
export class GithubService{
  private username: string;
  private client_id = client_id;
  private client_secret = client_secret;

  constructor(private _http: Http) {
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
