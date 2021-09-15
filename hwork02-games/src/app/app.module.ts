import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameComponent } from './components/game/game.component';
import { AbbriviatePipe } from './pipes/abbriviate.pipe';
import { LoadingSpinnerComponent } from './components/ui/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [AppComponent, GameListComponent, GameComponent, AbbriviatePipe, LoadingSpinnerComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
