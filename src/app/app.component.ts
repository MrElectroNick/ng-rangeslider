import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-rangeslider';

  val = 10;
  val2 = 123;

  changeVal(e: Event) {
    this.val = parseInt((e.target as HTMLInputElement).value, 10);
  }

  changeRange(v) {
    console.log('changeRange', v);
    this.val = v;
  }
}
