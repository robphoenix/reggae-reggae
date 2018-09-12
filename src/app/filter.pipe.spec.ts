import { Artist } from './artist';
import { FilterArtistsPipe } from './filter.pipe';

describe('FilterArtistsPipe', () => {
  let pipe: FilterArtistsPipe;

  beforeEach(() => {
    pipe = new FilterArtistsPipe();
  });

  it('should return empty array if no artists', () => {
    expect(pipe.transform([], '')).toEqual([]);
  });

  it('should return artists array if no search term', () => {
    const artists: Artist[] = [
      { id: 1, name: 'Lee Scratch Perry' },
      { id: 2, name: 'Bob Marley' },
    ];
    expect(pipe.transform(artists, '')).toEqual(artists);
  });
});
