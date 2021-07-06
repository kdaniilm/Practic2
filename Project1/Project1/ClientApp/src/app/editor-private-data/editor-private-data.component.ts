import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-private-data',
  templateUrl: './editor-private-data.component.html',
  styleUrls: ['./editor-private-data.component.css']
})
export class EditorPrivateDataComponent implements OnInit {

  public privateDataSet: Array<string>;


  constructor(httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    httpClient.get<Array<string>>(baseUrl + "privatedata/get-editor").subscribe(res => {
      this.privateDataSet = res;
    },
      error => {
        console.log(error);
      });
  }

  ngOnInit() {
  }

}
