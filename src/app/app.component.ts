import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Movie } from './models';
import { HttpClient } from '@angular/common/http';
import { Config } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movies';
  faSearch = faSearch;
  movies: Array<Movie> = [];
  searchText: string = "";
  selectedMovie: Movie | null = null;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.searchMovies();
  }

  searchMovies(): void {
    this.http.get(
      `https://wookie.codesubmit.io/movies${this.searchText ? `?q=${this.searchText}` : ''}`,
      {
        headers: {
          "Authorization": "Bearer Wookie2019",
        },
        observe: "body",
        responseType: "json",
      }
    ).subscribe((data: Config) => {
      this.movies = data.movies.map((movie: any) => {
        movie.released_on = new Date(movie.released_on);
        return movie;
      });
    });
  }

  filterMovies(searchText: any): void {
    this.searchText = searchText;
    this.searchMovies();
  }

  selectMovie(movieId: string): void {
    this.selectedMovie = this.movies.find(movie => movie.id == movieId) || null;
  }

  unSelectMovie(): void {
    this.selectedMovie = null;
  }
}
