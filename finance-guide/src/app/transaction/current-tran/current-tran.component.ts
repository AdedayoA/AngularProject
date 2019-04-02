import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-tran',
  templateUrl: './current-tran.component.html',
  styleUrls: ['./current-tran.component.css']
})
export class CurrentTranComponent implements OnInit {

  constructor() { }
/**
  Progress  of current tran component
   progress = 0;
 */
progress = 0;
  ngOnInit() {
  }

  onConfirm() {
    clearInterval(this.timer)
  }
}
/**
ngOnInit() {
  setInterval(() => {
    this.progress = this.progress + 5;
  }, 1000);
}
}
*/