import * as subscriptions from '../../graphql/subscriptions';

import { API, graphqlOperation } from 'aws-amplify';
import { Component, Input, OnInit } from '@angular/core';

import { APIService } from '../API.service';
import { ListFailsQuery } from 'API.Graphql';
import { createFail } from '../../graphql/mutations'
import { listFails } from '../../graphql/queries';
import { onCreateFail } from '../../graphql/subscriptions';

import Observable = require('zen-observable');

@Component({
  selector: 'app-failwall',
  templateUrl: './failwall.component.html',
  styleUrls: ['./failwall.component.css']
})
export class FailwallComponent implements OnInit {

  constructor(private APIService: APIService) { }
  fails: any = [];
  newFail: string = "";
  async ngOnInit() {

    var response = await API.graphql(graphqlOperation(listFails))
    this.fails = (response as any).data.listFails.items;

    // let result = await API.graphql(graphqlOperation(listFails)) as {
    //   data: ListFailsQuery;
    // };
    //     this.fails = result.data.listFails.items

    var subscription = API.graphql(
      graphqlOperation(onCreateFail)
    ) as Observable<object>;

    subscription.subscribe({
      next: (sourceData) => {
        const newFail = (sourceData as any).value.data.onCreateFail
        this.fails = [newFail, ...this.fails];
      }
    });
  }

  async createFail() {
    const newFailure = { name: this.newFail, rating: 5 };
    await API.graphql(graphqlOperation(createFail, {
      input: newFailure
    }));
    this.newFail = '';
  }
}
