import { Component, OnInit } from '@angular/core';
import { HttpclienttestService } from '../service/httpclienttest.service';
import { Observable } from 'rxjs';
import { userData } from '../model/userData';

@Component({
  selector: 'app-app5-httpclient',
  templateUrl: './app5-httpclient.component.html',
  styleUrls: ['./app5-httpclient.component.css']
})
export class App5HttpclientComponent implements OnInit {

  constructor(private httpclienttestService:HttpclienttestService) { }
  datas : Observable<userData[]>;
  /* datas : userData[]; */
  ngOnInit() {
  }

  getData(): void{
    this.datas = this.httpclienttestService.getUser();
    /* this.httpclienttestService.getUser().subscribe(i => this.datas = i); */
  }


}
