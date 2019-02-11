import { Injectable, } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";


@Injectable({providedIn: 'root'})
export class MyActivate  implements CanActivate {

  islogin: boolean=false;
constructor(
            private router: Router){}

//next:ActivatedRouteSnapshot, state:RouterStateSnapshot可以取得登入前路徑,在驗證失敗跳轉到登入頁面,提供登入成功時可以跳轉的參考路徑
  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
    /* this.loginService.LoginActivate().subscribe(i=>{this.islogin= i.msg==="true"}); */
   /* this.loginService.LoginActivate().toPromise().then(i=>{this.islogin= i.msg==="true"}); */
    /* console.log(`canActivate登入狀態:${this.islogin}`);
    return this.islogin;  */

console.log("Active");
/* console.log(state);
console.log(next); */

  /*   return this.loginService.LoginActivate().toPromise().
            then(i=>{this.islogin= i.msg==="true";
              if(!this.islogin)this.router.navigate(['Login'],{queryParams: next.routeConfig});return true;
            });
             */
            return true;
    
  }



  


  
}

