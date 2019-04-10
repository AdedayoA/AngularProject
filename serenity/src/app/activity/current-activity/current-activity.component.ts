import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopActivityComponent } from './stop-activity-component';

@Component({
  selector: 'app-current-activity',
  templateUrl: './current-activity.component.html',
  styleUrls: ['./current-activity.component.css']
})
export class CurrentActivityComponent implements OnInit {
  progress = 0;
  timer: number;
  @Output() activityExit = new EventEmitter();

  constructor(private dialog: MatDialog) { }
 
   ngOnInit() {
    this.startOrResumeTimer();
   }

   startOrResumeTimer(){
    this.timer = setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
   }
 
   onStop()
   {
     clearInterval(this.timer);
     const dialogRef = this.dialog.open(StopActivityComponent, {
      data: {
        progress: this.progress
      }});

      dialogRef.afterClosed().subscribe(result => {
        if (result){
          this.activityExit.emit();
        }
        else {
          this.startOrResumeTimer();
        }
      })

   }
 }