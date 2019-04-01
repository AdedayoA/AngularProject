import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTranComponent } from './past-tran.component';

describe('PastTranComponent', () => {
  let component: PastTranComponent;
  let fixture: ComponentFixture<PastTranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastTranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastTranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
