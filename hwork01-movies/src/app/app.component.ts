import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  moviesTitle = 'Movies (from App)';
  movieTitle = 'Passed from App Comp';
}
