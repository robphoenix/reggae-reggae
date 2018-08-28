import { Component, OnInit } from '@angular/core';
import { ReggaeArtistsService } from '../reggae-artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  reggaeArtists: Object;

  constructor(private reggaeArtistsService: ReggaeArtistsService) {}

  ngOnInit() {
    this.getReggaeHeroes();
  }

  getReggaeHeroes() {
    this.reggaeArtistsService
      .getReggaeArtists()
      .subscribe(artists => (this.reggaeArtists = artists));

    console.log(this.reggaeArtists);
  }
}
