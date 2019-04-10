import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css']
})
export class NewActivityComponent implements OnInit {
  @Output() activityStart = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onStartActivity() {
    this.activityStart.emit();
  }
}
