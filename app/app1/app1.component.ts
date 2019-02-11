import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { userData } from '../model/userData';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component implements OnInit {
  datas:userData[];
  userData: userData= new userData();
  testValue: string;
  @ViewChild('domtest')  test: ElementRef;
  constructor() {
    
   }
   
  ngOnInit() {
    this.datas = [
      {id : 957444,name:'小黃',birthday:new Date(1990, 3, 20, 12, 30)},
      {id : 254862,name:'小綠',birthday:new Date(123456789)},
      {id : 654798,name:'小紅',birthday:new Date('1965-08-12 05:40')}
    ];
    this.userData = new userData();
    
  }


  onSubmitClick1(){
    alert(JSON.stringify(this.userData));
  }
  onSubmitClick2(){
    this.testValue=this.test.nativeElement.value;
  }
}
