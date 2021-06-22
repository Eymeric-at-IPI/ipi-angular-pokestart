import {Component, Input, OnInit} from '@angular/core';
import {PokeAPIResult, Pokemon, PokemonInfo} from "../models/models";
import {PokemonsService} from "../services/pokemons.service";

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {
	@Input() pokeInfo!: PokemonInfo;
	pokemon ?: Pokemon;

	status : boolean = false;

  	constructor(private pokemonsService: PokemonsService) { }

  	ngOnInit(): void {
		this.pokemonsService
			.fetchOne(this.pokeInfo.url)
			.subscribe(result => this.pokemon = result);
  	}

	getStatusLabel() {
		return this.status ? "UNADOPT" : "ADOPT";
	}

	getStatus() {
		return this.status;
	}

	toggleStatus() {
  		this.status = !this.status;
	}

}

/*
TODO :
	- button change status
 */
