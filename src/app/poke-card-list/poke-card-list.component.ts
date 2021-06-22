import { Component, OnInit } from '@angular/core';
import { PokemonsService } from "../services/pokemons.service";
import {async, Observable} from "rxjs";
import {PokeAPIResult, Pokemon, PokemonInfo} from "../models/models";

@Component({
  selector: 'app-poke-card-list',
  templateUrl: './poke-card-list.component.html',
  styleUrls: ['./poke-card-list.component.css']
})
export class PokeCardListComponent implements OnInit {

	pokeAPIResult: PokeAPIResult<PokemonInfo> | undefined;

  	constructor(private pokemonsService: PokemonsService) {
		// this.pokeAPIResult =
	}

	ngOnInit(): void {
		this.pokemonsService
			.fetchAll()
			.subscribe(result => this.pokeAPIResult = result);
	}

	getPokemons(): PokeAPIResult<PokemonInfo> | undefined {
  		return this.pokeAPIResult;
	}

}

// TODO : un objet pokemon ?
