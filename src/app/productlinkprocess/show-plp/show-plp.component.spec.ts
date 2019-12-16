import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPlpComponent } from './show-plp.component';

describe('ShowPlpComponent', () => {
  let component: ShowPlpComponent;
  let fixture: ComponentFixture<ShowPlpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPlpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
