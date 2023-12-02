import { TestBed } from '@angular/core/testing';

import { UserNoobService } from './user-noob.service';

describe('UserNoobService', () => {
  let service: UserNoobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserNoobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
