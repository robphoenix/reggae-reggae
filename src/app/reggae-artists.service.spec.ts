import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { ReggaeArtistsService } from './reggae-artists.service';

describe('ReggaeArtistsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReggaeArtistsService],
    });
  });

  it('should be created', inject(
    [ReggaeArtistsService],
    (service: ReggaeArtistsService) => {
      expect(service).toBeTruthy();
    },
  ));
});
