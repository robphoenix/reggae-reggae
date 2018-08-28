import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReggaeArtistsService {
  private reggaeArtistsUrl = 'src/app/reggae-artists.json';

  constructor(private http: HttpClient) {}

  getReggaeArtists() {
    return this.http.get(this.reggaeArtistsUrl).pipe(
      map(res => res),
      catchError(this.handleError('getReggaeArtists', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
