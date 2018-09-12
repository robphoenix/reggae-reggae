import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { DataService } from '../data.service';
import { ReggaeArtistsService } from '../reggae-artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
})
export class ArtistsComponent implements OnInit {
  reggaeArtists: Artist[];
  searchTerm: string;
  selectedArtist: Artist;

  constructor(
    private reggaeArtistsService: ReggaeArtistsService,
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.getArtists();
  }

  getArtists() {
    if (!this.dataService.reggaeArtists) {
      this.reggaeArtistsService.getReggaeArtists().subscribe((artists) => {
        this.reggaeArtists = artists.Reggae.map((artist, i) => {
          return <Artist>{ id: i, name: artist };
        });
        this.setArtists();
      });
    } else {
      this.reggaeArtists = this.dataService.getArtists();
    }
  }

  setArtists() {
    this.dataService.setArtists(this.reggaeArtists);
  }

  onSelect(artist: Artist): void {
    this.selectedArtist = artist;
  }
}
