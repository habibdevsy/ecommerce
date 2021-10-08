import { TestBed } from '@angular/core/testing';

import { BarndService } from './barnd.service';

describe('BarndService', () => {
  let service: BarndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
