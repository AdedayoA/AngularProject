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
  activitySubscription: Subscription;

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activitySubscription = this.activityService.activityChanged.subscribe(activity => {
        if (activity){
          this.ongoingActivity = true;
        }else 
        {
          this.ongoingActivity = false;
        }
      });
  }

}
