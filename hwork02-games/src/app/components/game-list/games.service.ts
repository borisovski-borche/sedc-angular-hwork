import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Game } from 'src/app/interfaces/game';

@Injectable({ providedIn: 'root' })
export class GamesService {
  constructor(private http: HttpClient) {}
  apiUrl = 'https://json-server-boris.herokuapp.com/api/games';

  fetchGames() {
    return this.http
      .get<{ games: Game[] }>(this.apiUrl)
      .pipe(map((response) => response.games));
  }
}
