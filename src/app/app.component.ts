import { Component } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  selector: 'my-app',
  template: `<navbar></navbar>
             <profile></profile>`,
  providers: [GithubService],
})
export class AppComponent  { }
