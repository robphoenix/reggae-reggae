import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { ArtistDetailComponent } from '../artist-detail/artist-detail.component';
import { FilterArtistsPipe } from '../filter.pipe';
import { ArtistsComponent } from './artists.component';

describe('ArtistsComponent', () => {
  let component: ArtistsComponent;
  let fixture: ComponentFixture<ArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, HttpClientTestingModule, FormsModule],
      declarations: [
        AppComponent,
        ArtistsComponent,
        ArtistDetailComponent,
        FilterArtistsPipe,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
