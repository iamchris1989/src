import { Component, OnInit, Inject } from '@angular/core';
import { userData } from '../model/userData';
import { MemberServiceInterface } from '../service/member.interface';

@Component({
  selector: 'app-app4',
  templateUrl: './app4.component.html',
  styleUrls: ['./app4.component.css']
})
export class App4Component implements OnInit{
datas:userData[];
  constructor(@Inject('MemberServiceInterface') private memberService:MemberServiceInterface) { }
  
  ngOnInit() {
  }

  search(){
    this.datas = this.memberService.getUsers();
  }
}
