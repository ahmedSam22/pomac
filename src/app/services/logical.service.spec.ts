import { TestBed } from '@angular/core/testing';

import { LogicalService } from './logical.service';

describe('LogicalService', () => {
  let service: LogicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
