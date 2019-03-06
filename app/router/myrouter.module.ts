import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App1Component } from '../app1/app1.component';
import { App2Component } from '../app2/app2.component';
import { RouterModule, Routes } from '@angular/router';
import { App4Component } from '../app4/app4.component';
import { App3Component } from '../app3/app3.component';
import { MyActivate } from '../CanActivate/MyActivate';
import { App5HttpclientComponent } from '../app5-httpclient/app5-httpclient.component';


/**@NgModule 的 forRoot 用到const routes 在宣告在@NgModule上面*/
const routes: Routes = [
     { path: 'app1', component: App1Component },
  { path: 'app2', component: App2Component },
  { path: 'app3', component: App3Component },
  { path: 'app4', component: App4Component, canActivate: [MyActivate] },
  { path: 'app5', component: App5HttpclientComponent}
];




@NgModule({
  imports: [ CommonModule,
    RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class MyrouterModule { }
