import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PokeCardListComponent } from './poke-card-list/poke-card-list.component';
import { PokeCardComponent } from './poke-card/poke-card.component';

import { PokemonsService } from "./services/pokemons.service";
// import { PokemonService } from "./services/pokemon.service";
import { HttpClientModule } from "@angular/common/http";
import { AdoptDropdownButtonComponent } from './adopt-dropdown-button/adopt-dropdown-button.component';
import { AdoptListComponent } from './adopt-list/adopt-list.component';
import { AdoptListItemComponent } from './adopt-list-item/adopt-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PokeCardListComponent,
    PokeCardComponent,
    AdoptDropdownButtonComponent,
    AdoptListComponent,
    AdoptListItemComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
  ],
  providers: [
	  PokemonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
