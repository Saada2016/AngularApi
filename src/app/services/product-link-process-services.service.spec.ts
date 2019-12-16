import { TestBed } from '@angular/core/testing';

import { ProductLinkProcessServicesService } from './product-link-process-services.service';

describe('ProductLinkProcessServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductLinkProcessServicesService = TestBed.get(ProductLinkProcessServicesService);
    expect(service).toBeTruthy();
  });
});
