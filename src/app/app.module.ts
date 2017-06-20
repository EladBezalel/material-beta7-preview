import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MdButtonModule,
  MdCardModule,
  MdExpansionModule,
  MdToolbarModule
} from '@angular/material';

import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    FlexLayoutModule,

    MdCardModule,
    MdToolbarModule,
    MdButtonModule,
    MdExpansionModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {}
