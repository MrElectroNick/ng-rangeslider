import { NgModule } from '@angular/core';
import { NgRangesliderComponent } from './ng-rangeslider.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [NgRangesliderComponent],
  imports: [
    CommonModule
  ],
  exports: [NgRangesliderComponent]
})
export class NgRangesliderModule { }
