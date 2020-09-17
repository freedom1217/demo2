import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AaaComponent } from './aaa/aaa.component';
import { FormsModule } from '@angular/forms';
import { BbbComponent } from './aaa/bbb/bbb.component';


@NgModule({
  declarations: [
    AppComponent,
    AaaComponent,
    BbbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
