import { TestBed } from '@angular/core/testing';

import { DotnetcoreService } from './dotnetcore.service';

describe('DotnetcoreService', () => {
  let service: DotnetcoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DotnetcoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
