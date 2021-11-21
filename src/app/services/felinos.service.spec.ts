import { TestBed } from '@angular/core/testing';

import { FelinosService } from './felinos.service';

describe('FelinosService', () => {
  let service: FelinosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FelinosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
