import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule,Routes} from '@angular/router';
import {Component} from '@angular/core';

//Service Imports
import {UserService} from './user.service'

//Guard Import
import { AuthguardGuard } from './authguard.guard';
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component'; 

const appRoutes:Routes=[
  {
path:'',
component: LoginFormComponent
},
{
path:'user/:name',
component: UserComponent,
},
{
path:'user/:name/:id',
component: UserComponent,
},
{
path:'dashboard',
canActivate:[AuthguardGuard],   
component: DashboardComponent
},
{
path:'**',
component: NotfoundComponent,
},

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent,
    UserComponent,
    NotfoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
