import { Component, OnInit } from '@angular/core';
import { GamesService } from './games.service';
import { Game } from '../../interfaces/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  games: Game[];

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.gamesService.fetchGames().subscribe((games) => (this.games = games));
  }
}
