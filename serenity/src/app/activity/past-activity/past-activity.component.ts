import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Activity } from '../activity.model';
import { ActivityService } from '../activity.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-past-activity',
  templateUrl: './past-activity.component.html',
  styleUrls: ['./past-activity.component.css']
})
export class PastActivityComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns = ['date', 'name', 'duration', 'breaths', 'state'];
  dataSource = new MatTableDataSource<Activity>();
  private acChangedSubscription: Subscription;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.acChangedSubscription = this.activityService.finishedActivitiesChanged.subscribe((activities: Activity[]) => {
      this.dataSource.data = activities;
    });
    this.activityService.fetchCompletedorCancelledActivities();
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: String) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(){
    this.acChangedSubscription.unsubscribe();
  }
}
