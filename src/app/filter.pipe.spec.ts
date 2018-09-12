import { Artist } from './artist';
import { FilterArtistsPipe } from './filter.pipe';

describe('FilterArtistsPipe', () => {
  const artists: Artist[] = [
    { id: 1, name: 'Lee Scratch Perry' },
    { id: 2, name: 'Bob Marley' },
  ];
  let pipe: FilterArtistsPipe;

  beforeEach(() => {
    pipe = new FilterArtistsPipe();
  });

  it('should return empty array if no artists', () => {
    expect(pipe.transform([], '')).toEqual([]);
  });

  it('should return artists array if no search term', () => {
    expect(pipe.transform(artists, '')).toEqual(artists);
  });

  it('should return empty array if search term not present', () => {
    expect(pipe.transform(artists, 'Metallica')).toEqual([]);
  });

  it('should return filtered array', () => {
    expect(pipe.transform(artists, 'Lee')).toEqual([
      { id: 1, name: 'Lee Scratch Perry' },
    ] as Artist[]);
  });
});
