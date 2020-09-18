import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarrComponent } from './toolbarr/toolbarr.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';





@NgModule({


  exports: [

    MatIconModule,
    MatCardModule



  ],
  declarations: [
    AppComponent,
    ToolbarrComponent,
    CardComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule




  ],


  providers: [],
  bootstrap: [AppComponent]
})





export class AppModule { }






