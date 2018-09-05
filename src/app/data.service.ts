import { Injectable } from '@angular/core';
import { Artist } from './artist';
import { ReggaeArtistsService } from './reggae-artists.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  reggaeArtists: Map<number, Artist>;

  constructor(private reggaeArtistsService: ReggaeArtistsService) {}

  setArtists(artists: Artist[]) {
    this.reggaeArtists = new Map();
    if (!artists) {
      return;
    }
    artists.forEach((artist, i) => {
      this.reggaeArtists.set(i, artist);
    });
  }

  getArtists(): Artist[] {
    return Array.from(this.reggaeArtists.values());
  }

  getArtist(id: number): Artist {
    if (!this.reggaeArtists) {
      this.reggaeArtists = new Map();
      this.reggaeArtistsService.getReggaeArtists().subscribe(artists => {
        this.setArtists(
          artists.Reggae.map((artist, i) => {
            return <Artist>{ id: i, name: artist };
          })
        );
      });
    }
    return this.reggaeArtists.get(id);
  }

  updateArtist(artist: Artist) {
    this.reggaeArtists.set(artist.id, artist);
  }
}
