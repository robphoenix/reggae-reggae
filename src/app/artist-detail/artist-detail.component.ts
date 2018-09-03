import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../artist';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {
  @Input()
  artist: Artist;

  youTubeUrl = 'https://www.youtube.com/results?search_query=';

  constructor() {}

  ngOnInit() {}
}
