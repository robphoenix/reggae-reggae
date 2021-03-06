import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistsComponent } from './artists/artists.component';
import { FilterArtistsPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    FilterArtistsPipe,
    ArtistDetailComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
