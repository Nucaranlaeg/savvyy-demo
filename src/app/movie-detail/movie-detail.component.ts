import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from './../models';
import { faStar, faStarHalfAlt, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  inputs: ['movie'],
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | null = null;
  faStar = faStar;
  faStarHalfAlt = faStarHalfAlt;
  faEmptyStar = faEmptyStar;
  faLongArrowAltLeft = faLongArrowAltLeft;

  constructor() { }

  ngOnInit(): void {
  }
  
  getCast(): string {
    return this.movie?.cast.toString().replace(/,/g, ", ") || "";
  }

  getDirectors(): string {
    return this.movie?.cast.toString().replace(/,/g, ", ") || "";
  }
  
  @Output() public unSelectMovie = new EventEmitter();

  onUnSelectMovie(): void {
    this.unSelectMovie.emit();
  }

}
