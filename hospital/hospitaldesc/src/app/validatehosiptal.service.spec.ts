import { TestBed } from '@angular/core/testing';

import { ValidatehosiptalService } from './validatehosiptal.service';

describe('ValidatehosiptalService', () => {
  let service: ValidatehosiptalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatehosiptalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
