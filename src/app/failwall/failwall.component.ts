import { Component, OnInit } from '@angular/core';

import { APIService } from '../API.service';

@Component({
  selector: 'app-failwall',
  templateUrl: './failwall.component.html',
  styleUrls: ['./failwall.component.css']
})
export class FailwallComponent implements OnInit {

  constructor(private apiService: APIService) {}
  fails: Array<any>;

  async ngOnInit() {
    this.apiService.ListFails().then((evt) => {
      this.fails = evt.items;
    });
    this.apiService.OnCreateFailListener.subscribe((evt) => {
      const data = (evt as any).value.data.onCreateFail;
      this.fails = [...this.fails, data];
    });
  }

  createFail() {
    console.log('create new fail');
    this.apiService.CreateFail({
        name: 'Angular',
        description: 'testing',
        rating: 2
    }).then((evt) => {
      console.log(evt);
    });
  }
}
