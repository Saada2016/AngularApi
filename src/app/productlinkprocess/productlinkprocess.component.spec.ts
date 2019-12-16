import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlinkprocessComponent } from './productlinkprocess.component';

describe('ProductlinkprocessComponent', () => {
  let component: ProductlinkprocessComponent;
  let fixture: ComponentFixture<ProductlinkprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductlinkprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlinkprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
