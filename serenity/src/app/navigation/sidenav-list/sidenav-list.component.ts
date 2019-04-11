import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth-service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  @Output() closeSidenav = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  onClose() {
    this.closeSidenav.emit();
  }

  onToggleSidenav(){
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.onClose();
    this.authService.logout();
  }

  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }
}
