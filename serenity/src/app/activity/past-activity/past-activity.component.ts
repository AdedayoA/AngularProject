import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Activity } from '../activity.model';
import { ActivityService } from '../activity.service';
@Component({
  selector: 'app-past-activity',
  templateUrl: './past-activity.component.html',
  styleUrls: ['./past-activity.component.css']
})
export class PastActivityComponent implements OnInit, AfterViewInit {
  displayedColumns = ['date', 'name', 'duration', 'breaths', 'state'];
  dataSource = new MatTableDataSource<Activity>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.dataSource.data = this.activityService.getCompletedorCancelledActivities();
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
}
