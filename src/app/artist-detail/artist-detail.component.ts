import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../artist';
import { DataService } from '../data.service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css'],
})
export class ArtistDetailComponent implements OnInit {
  @Input() artist: Artist;

  youTubeUrl = 'https://www.youtube.com/results?search_query=';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.getArtist();
  }

  getArtist(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.artist = this.dataService.getArtist(id);
  }

  goBack(): void {
    this.location.back();
  }
}
