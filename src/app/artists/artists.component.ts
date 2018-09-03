import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { ReggaeArtistsService } from '../reggae-artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  reggaeArtists: Artist[];
  searchTerm: string;
  selectedArtist: Artist;

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

  onSelect(artist: Artist): void {
    this.selectedArtist = artist;
  }
}
