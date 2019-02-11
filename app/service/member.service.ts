import { Injectable } from '@angular/core';
import { MemberServiceInterface } from './member.interface';

@Injectable({
  providedIn: 'root'
})
export class MemberService implements MemberServiceInterface{

  constructor() { }
  getUsers() : any{
    var datas = [{id: 101, name: "User1", birthday: 1538719879000},
   {id: 105, name: "User5", birthday: 1538719879000},
   {id: 109, name: "User9", birthday: 1538719879000},
   {id: 110, name: "User10", birthday: 1538719879000},
   {id: 111, name: "小白", birthday: 1538731805000},
   {id: 112, name: "小綠", birthday: 1539433155000},
   {id: 113, name: "小白", birthday: 1539437729000},
   {id: 114, name: "小白", birthday: 1541405124000},
   {id: 115, name: "測試1", birthday: 1541405309000},
   {id: 116, name: "測試1", birthday: 1541405315000}]
  
  return datas;
  }

  check(str:string):boolean{
    var boo=false;
    if(str.trim!==null)
      boo=true;
  return boo;
  }
}
