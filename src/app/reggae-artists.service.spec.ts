import { TestBed, inject } from '@angular/core/testing';

import { ReggaeArtistsService } from './reggae-artists.service';

describe('ReggaeArtistsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReggaeArtistsService]
    });
  });

  it('should be created', inject([ReggaeArtistsService], (service: ReggaeArtistsService) => {
    expect(service).toBeTruthy();
  }));
});
