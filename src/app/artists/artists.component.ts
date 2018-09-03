import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { ReggaeArtistsService } from '../reggae-artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  youTubeUrl = 'https://www.youtube.com/results?search_query=';
  reggaeArtists: Artist[];
  searchTerm: string;

  constructor(private reggaeArtistsService: ReggaeArtistsService) {}

  ngOnInit() {
    this.getArtists();
  }

  getArtists() {
    this.reggaeArtistsService.getReggaeArtists().subscribe(artists => {
      this.reggaeArtists = artists.Reggae.map((artist, i) => {
        return <Artist>{ id: i, name: artist };
      });
    });
  }
}
