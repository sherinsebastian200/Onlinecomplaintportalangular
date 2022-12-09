import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLogincomplaintComponent } from './admin-logincomplaint/admin-logincomplaint.component';
import { UserLogincomplaintComponent } from './user-logincomplaint/user-logincomplaint.component';
import { UserRegistercomplaintComponent } from './user-registercomplaint/user-registercomplaint.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const myRoute:Routes=[
  {
    path:"",
    component:AdminLogincomplaintComponent
  },
  {
    path:"login",
    component:UserLogincomplaintComponent
    
  },
  {
    path:"register",
    component:UserRegistercomplaintComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    AdminLogincomplaintComponent,
    UserLogincomplaintComponent,
    UserRegistercomplaintComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
