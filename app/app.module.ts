import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { App1Component } from './app1/app1.component';
import { App2Component } from './app2/app2.component';
import { MyrouterModule } from './router/myrouter.module';
import { FormsModule } from '@angular/forms';
import { App3Component } from './app3/app3.component';
import { DirectiveTestDirective } from './myDirective/directive-test.directive';
import { App4Component } from './app4/app4.component';
import{MemberService} from './service/member.service';
import { InjectionService } from './config/MyDependencyInjection';
@NgModule({
  declarations: [
    AppComponent,
    App1Component,
    App2Component,
    App3Component,
    DirectiveTestDirective,
    App4Component
  ],
  imports: [
    BrowserModule,
    MyrouterModule,
    FormsModule
  ],
  providers: [InjectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
