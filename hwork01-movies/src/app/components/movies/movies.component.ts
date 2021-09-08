import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/helpers';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [
    {
      title: '50 Shades of Gray',
      releaseYear: 2015,
      directorName: 'Sam Taylor Johnson',
      producerName: 'Micheal De Luca',
      genre: 'Explicit Romance',
      rating: 0,
    },
    {
      title: '50 Shades of Darker',
      releaseYear: 2017,
      directorName: 'James Foley',
      producerName: 'Michael De Luca',
      genre: 'Explicit Romance',
      rating: -2,
    },
    {
      title: '50 Shades Freed',
      releaseYear: 2018,
      directorName: 'James Foley',
      producerName: 'Michael De Luca',
      genre: 'Explicit Romance',
      rating: -3,
    },
  ];

  selectedMovie: Movie | null = null;

  @Input() title: string = '';
  @Input() movieTitle: string = '';

  constructor() {}

  getSelectedMovie(movie: Movie) {
    this.selectedMovie = movie;
  }

  ngOnInit(): void {
    console.log(this.movieTitle);
  }
}
