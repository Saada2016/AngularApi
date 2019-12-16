import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProcComponent } from './show-proc.component';

describe('ShowProcComponent', () => {
  let component: ShowProcComponent;
  let fixture: ComponentFixture<ShowProcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
