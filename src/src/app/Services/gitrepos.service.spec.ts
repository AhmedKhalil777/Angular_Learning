import { TestBed } from '@angular/core/testing';

import { GitreposService } from './gitrepos.service';

describe('GitreposService', () => {
  let service: GitreposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitreposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
