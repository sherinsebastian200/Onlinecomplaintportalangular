import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLogincomplaintComponent } from './admin-logincomplaint/admin-logincomplaint.component';
import { UserLogincomplaintComponent } from './user-logincomplaint/user-logincomplaint.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLogincomplaintComponent,
    UserLogincomplaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
