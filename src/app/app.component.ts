import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-rangeslider';

  val = 3;
  min = -10;
  max = 10;
  step = 0.1;
  disabled = false;
  rtl = false;

  cVal(e: Event) {
    this.val = parseFloat((e.target as HTMLInputElement).value);
  }

  cMin(e: Event) {
    this.min = parseFloat((e.target as HTMLInputElement).value);
  }

  cMax(e: Event) {
    this.max = parseFloat((e.target as HTMLInputElement).value);
  }

  cStep(e: Event) {
    this.step = parseFloat((e.target as HTMLInputElement).value);
  }

  cDisabled(e: Event) {
    this.disabled = (e.target as HTMLInputElement).checked;
  }

  cRtl(e: Event) {
    this.rtl = (e.target as HTMLInputElement).checked;
  }
}
