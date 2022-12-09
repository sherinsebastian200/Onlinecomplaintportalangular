import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLogincomplaintComponent } from './admin-logincomplaint/admin-logincomplaint.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLogincomplaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
