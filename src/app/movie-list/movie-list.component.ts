import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from './../models';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  inputs: ['movies'],
})
export class MovieListComponent implements OnInit {
  genres: Set<string> = new Set();
  movies: Array<Movie> = [];
  sortedMovies: any = [];
  search: string = "";

  constructor() {}

  ngOnInit(): void {
    this.sortMovies();
  }

  ngOnChanges(): void {
    this.sortMovies();
  }

  sortMovies(): void {
    this.genres = new Set(this.movies.flatMap(movie => movie.genres));
    this.sortedMovies = [];
    this.genres.forEach(genre => {
      this.sortedMovies[genre] = this.movies.filter(movie => movie.genres.includes(genre));
    });
  }

  @Output() public selectMovie = new EventEmitter<string>();

  onSelectMovie(movie: Movie): void {
    this.selectMovie.emit(movie.id);
  }

}
