import { TestBed, inject } from '@angular/core/testing';

import { WolfsoundService } from './wolfsound.service';

describe('WolfsoundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WolfsoundService]
    });
  });

  it('should be created', inject([WolfsoundService], (service: WolfsoundService) => {
    expect(service).toBeTruthy();
  }));
});
