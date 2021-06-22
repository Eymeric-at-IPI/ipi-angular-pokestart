import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PokeCardListComponent } from './poke-card-list/poke-card-list.component';
import { PokeCardComponent } from './poke-card/poke-card.component';

import { PokemonsService } from "./services/pokemons.service";
import { PokemonService } from "./services/pokemon.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PokeCardListComponent,
    PokeCardComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
  ],
  providers: [
	  PokemonsService,
	  PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
