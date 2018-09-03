import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { FilterArtistsPipe } from './filter.pipe';

@NgModule({
  declarations: [AppComponent, ArtistsComponent, FilterArtistsPipe],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
