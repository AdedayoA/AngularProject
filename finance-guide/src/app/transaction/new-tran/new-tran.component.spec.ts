import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTranComponent } from './new-tran.component';

describe('NewTranComponent', () => {
  let component: NewTranComponent;
  let fixture: ComponentFixture<NewTranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
