import { Pipe, PipeTransform } from '@angular/core';
import { Artist } from './artist';

@Pipe({ name: 'filterArtists' })
export class FilterArtistsPipe implements PipeTransform {
  transform(artists: Artist[], term: string): Artist[] {
    if (!artists) {
      return [];
    }
    if (!term) {
      return artists;
    }
    return artists.filter((artist: Artist) => {
      const regex: RegExp = new RegExp(term, 'gi');
      return artist.name.match(regex);
    });
  }
}
