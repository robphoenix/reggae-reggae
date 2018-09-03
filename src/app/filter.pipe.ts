import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterArtists' })
export class FilterArtistsPipe implements PipeTransform {
  transform(artists: string[], term: string): string[] {
    if (!artists) {
      return [];
    }
    if (!term) {
      return artists;
    }
    return artists.filter((artist: string) => {
      const regex: RegExp = new RegExp(term, 'gi');
      return artist.match(regex);
    });
  }
}
