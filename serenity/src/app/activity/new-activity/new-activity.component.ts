import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angluar/forms';
import { ActivityService } from '../activity.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css']
})
export class NewActivityComponent implements OnInit {
  activities: Exercise[] = [];

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activities = this.activityService.getAvailableActivities();
  }

  onStartActivity(form: NgForm ) {
    this.activityService.startExercise(form.value.activity);
  }
}
