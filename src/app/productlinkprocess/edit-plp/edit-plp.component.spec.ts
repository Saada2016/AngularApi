import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlpComponent } from './edit-plp.component';

describe('EditPlpComponent', () => {
  let component: EditPlpComponent;
  let fixture: ComponentFixture<EditPlpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
