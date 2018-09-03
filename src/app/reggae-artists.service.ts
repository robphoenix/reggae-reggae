import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReggaeArtistsService {
  private reggaeArtistsUrl =
    // tslint:disable-next-line:max-line-length
    'https://gist.githubusercontent.com/robphoenix/d1f7412ae0d7fbcf527cab58bb5b8153/raw/b8f61730803862964efb0f32b9842e9537c00a4d/reggae-reggae.json';

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
