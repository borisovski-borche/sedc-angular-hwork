import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from 'src/app/helpers';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() title = '';
  @Input() movie: Movie | null = null;
  @Output() selectedMovie: EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor() {}

  onSelectMovie() {
    this.selectedMovie.emit(<Movie>this.movie);
  }

  ngOnInit(): void {}
}
