import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProcComponent } from './edit-proc.component';

describe('EditProcComponent', () => {
  let component: EditProcComponent;
  let fixture: ComponentFixture<EditProcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
