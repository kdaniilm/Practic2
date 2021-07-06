import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorPrivateDataComponent } from './editor-private-data.component';

describe('EditorPrivateDataComponent', () => {
  let component: EditorPrivateDataComponent;
  let fixture: ComponentFixture<EditorPrivateDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorPrivateDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorPrivateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
