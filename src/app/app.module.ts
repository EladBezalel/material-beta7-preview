import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  DateAdapter,
  MdButtonModule,
  MdCardModule,
  MdDatepickerModule,
  MdExpansionModule,
  MdInputModule,
  MdNativeDateModule,
  MdToolbarModule
} from '@angular/material';

import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';

import {MomentDateAdapter} from './MomentDateAdapter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    FlexLayoutModule,

    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdCardModule,
    MdToolbarModule,
    MdButtonModule,
    MdExpansionModule
  ],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
