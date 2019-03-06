import { TestBed, inject } from '@angular/core/testing';

import { HttpclienttestService } from './httpclienttest.service';

describe('HttpclienttestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpclienttestService]
    });
  });

  it('should be created', inject([HttpclienttestService], (service: HttpclienttestService) => {
    expect(service).toBeTruthy();
  }));
});
