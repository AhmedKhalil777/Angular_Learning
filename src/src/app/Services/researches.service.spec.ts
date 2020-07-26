import { TestBed } from '@angular/core/testing';

import { ResearchesService } from './researches.service';

describe('ResearchesService', () => {
  let service: ResearchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResearchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
