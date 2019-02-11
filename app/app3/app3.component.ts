import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app3',
  templateUrl: './app3.component.html',
  styleUrls: ['./app3.component.css']
})
export class App3Component implements OnInit {
  @Input() status: string;
  @Output() changeStatus = new EventEmitter();
  account:string=null;
  password:string=null;
  constructor() { }
  
  ngOnInit() {
  }



  login(){
    if(this.account!==null&&this.password!=null){
      this.status="已登入";
      this.changeStatus.emit(this.status);
      return alert("登入成功");
    }
    alert("登入失敗"); 
  }
  
  logout(){
    this.status="未登入";
    this.account=null;
    this.password=null;
    this.changeStatus.emit(this.status);
    alert("登出成功");
  }
}
