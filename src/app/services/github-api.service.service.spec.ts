import { TestBed } from '@angular/core/testing';

import { GithubApiServiceService } from './github-api.service.service';

describe('GithubApiServiceService', () => {
  let service: GithubApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});