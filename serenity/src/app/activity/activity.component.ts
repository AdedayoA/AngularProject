import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivityService } from './activity.service';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  ongoingActivity = false;
  exerciseSubscription: PushSubscription;

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.exerciseSubscription = this.activityService.exerciseChanged.subscribe(
      exercise => {
        if (exercise){
          this.ongoingActivity = true;
        }
        else {
          this.ongoingActivity = false;
        }
      }
    );
  }

}
