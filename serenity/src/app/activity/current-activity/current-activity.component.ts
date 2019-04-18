import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopActivityComponent } from './stop-activity-component';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-current-activity',
  templateUrl: './current-activity.component.html',
  styleUrls: ['./current-activity.component.css']
})
export class CurrentActivityComponent implements OnInit {
  progress = 0;
  timer: number;
  @Output() activityExit = new EventEmitter();

  constructor(private dialog: MatDialog, private activityService: ActivityService) { }
 
   ngOnInit() {
    this.startOrResumeTimer();
   }

   startOrResumeTimer(){
    const step = this.activityService.getRunningActivity().duration / 100 * 1000;
    console.log('The step is', step);
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        this.activityService.completeActivity();
        clearInterval(this.timer);
      }
      console.log('The step is', step);
    }, step);
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
          this.activityService.cancelActivity(this.progress);
        }
        else {
          this.startOrResumeTimer();
        }
      })

   }
 }