import { TestBed } from '@angular/core/testing';

import { TimelyTableService } from './timely-table.service';

describe('TimelyTableService', () => {
  let service: TimelyTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimelyTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
