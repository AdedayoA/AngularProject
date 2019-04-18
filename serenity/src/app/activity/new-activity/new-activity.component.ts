import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ActivityService } from '../activity.service';
import { Activity } from '../activity.model';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css']
})
export class NewActivityComponent implements OnInit, OnDestroy {
  activities: Activity[];
  activitySubscription: Subscription;


  constructor(private activityService: ActivityService) { }

  ngOnInit(){
    this.activitySubscription = this.activityService.activitiesChanged.subscribe(activities => (this.activities = activities));
    this.activityService.fetchAvailableActivities();
  }
  

  onStartActivity(form: NgForm ) {
    this.activityService.startActivity(form.value.activity);
  }

  ngOnDestroy(){
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.activitySubscription.unsubscribe();
    
  }
}
