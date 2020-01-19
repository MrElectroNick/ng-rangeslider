import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-rangeslider';

  val1 = 10;
  val2 = 123;

  changeVal1(e: Event) {
    this.val1 = parseInt((e.target as HTMLInputElement).value, 10);
    console.log('cv1', this.val1);
  }

  changeVal2(e: Event) {
    this.val2 = parseInt((e.target as HTMLInputElement).value, 10);
    console.log('cv2', this.val2);
  }

  changeRange1(v) {
    this.val1 = v;
    console.log('cr1', this.val1);
  }

  changeRange2(v) {
    this.val2 = v;
    console.log('cr1', this.val2);
  }
}
