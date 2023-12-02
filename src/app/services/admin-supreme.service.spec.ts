import { TestBed } from '@angular/core/testing';

import { AdminSupremeService } from './admin-supreme.service';

describe('AdminSupremeService', () => {
  let service: AdminSupremeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminSupremeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
