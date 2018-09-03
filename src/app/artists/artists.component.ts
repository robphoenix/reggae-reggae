import { Component, OnInit } from '@angular/core';
import { Artists } from '../artists';
import { ReggaeArtistsService } from '../reggae-artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  youTubeUrl = 'https://www.youtube.com/results?search_query=';
  artists: Artists;
  reggaeArtists: string[];

  constructor(private reggaeArtistsService: ReggaeArtistsService) {}

  ngOnInit() {
    this.getArtists();
  }

  getArtists() {
    this.reggaeArtistsService.getReggaeArtists().subscribe(artists => {
      this.artists = artists;
      this.reggaeArtists = artists.Reggae;
    });
  }

  filterReggaeArtists(term: string) {
    this.reggaeArtists = this.artists.Reggae.filter((artist: string) => {
      const regex: RegExp = new RegExp(term, 'gi');
      return artist.match(regex);
    });
  }
}
