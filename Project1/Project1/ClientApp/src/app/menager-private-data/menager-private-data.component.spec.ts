import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenagerPrivateDataComponent } from './menager-private-data.component';

describe('MenagerPrivateDataComponent', () => {
  let component: MenagerPrivateDataComponent;
  let fixture: ComponentFixture<MenagerPrivateDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenagerPrivateDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenagerPrivateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
