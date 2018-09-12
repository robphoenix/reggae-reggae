import { inject, TestBed } from '@angular/core/testing';
import { ReggaeArtistsService } from './reggae-artists.service';

describe('ReggaeArtistsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReggaeArtistsService],
    });
  });

  xit('should be created', inject(
    [ReggaeArtistsService],
    (service: ReggaeArtistsService) => {
      expect(service).toBeTruthy();
    },
  ));
});
