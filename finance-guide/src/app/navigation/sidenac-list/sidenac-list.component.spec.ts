import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenacListComponent } from './sidenac-list.component';

describe('SidenacListComponent', () => {
  let component: SidenacListComponent;
  let fixture: ComponentFixture<SidenacListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenacListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenacListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
