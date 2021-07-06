import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-menager-private-data',
  templateUrl: './menager-private-data.component.html',
  styleUrls: ['./menager-private-data.component.css']
})
export class MenagerPrivateDataComponent implements OnInit {

  public privateDataSet: Array<string>;


  constructor(httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    httpClient.get<Array<string>>(baseUrl + "privatedata/get-manager").subscribe(res => {
      this.privateDataSet = res;
    },
      error => {
        console.log(error);
      });
  }

  ngOnInit() {
  }

}
