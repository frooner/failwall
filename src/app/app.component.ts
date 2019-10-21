import { Component, OnInit } from '@angular/core';

import { APIService } from './API.service';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'failwall';

  constructor(private apiService: APIService, private amplifyService: AmplifyService) {
    this.amplifyService.authStateChange$
    .subscribe(authState => {
        this.signedIn = authState.state === 'signedIn';
        if (!authState.user) {
            this.user = null;
        } else {
            this.user = authState.user;
            this.greeting = "Hello " + this.user.username;
        }
});
  }

  fails: Array<any>;
  signedIn: boolean;
  user: any;
  greeting: string;
  async ngOnInit() {
    console.log('oninit');
    this.apiService.ListFails().then((evt) => {
      this.fails = evt.items;
    });
    this.apiService.OnCreateFailListener.subscribe((evt) => {
      const data = (evt as any).value.data.onCreateFail;
      this.fails = [...this.fails, data];
    });
  }

  createFail() {
    console.log('createfail');
    this.apiService.CreateFail({
        id: 'Angular',
        name: 'testing',
        rating: 5
    });
  }

}
