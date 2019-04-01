import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTranComponent } from './current-tran.component';

describe('CurrentTranComponent', () => {
  let component: CurrentTranComponent;
  let fixture: ComponentFixture<CurrentTranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentTranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
