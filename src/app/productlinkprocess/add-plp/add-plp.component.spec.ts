import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlpComponent } from './add-plp.component';

describe('AddPlpComponent', () => {
  let component: AddPlpComponent;
  let fixture: ComponentFixture<AddPlpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
