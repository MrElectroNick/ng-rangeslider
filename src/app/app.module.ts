import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgRangesliderModule} from '../../projects/ng-rangeslider/src/lib/ng-rangeslider.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgRangesliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
