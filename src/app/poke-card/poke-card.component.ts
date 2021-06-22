import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../models/Pokemon";
import {APIPokemons} from "../models/APIPokemons";
import {PokemonService} from "../services/pokemon.service";

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {
	@Input() apiPokemon!: APIPokemons;
	pokemon: Pokemon = {abilities: ["", ""], name: "", spriteUrl: "", types: ["", ""], weight: 0};

	status : boolean = false;

  	constructor(private pokemonService: PokemonService) { }

  	ngOnInit(): void {
		this.pokemon = this.pokemonService.fetchData(this.apiPokemon.url, this.apiPokemon.name);
  	}

  	getPokemon() {
  		return this.pokemon;
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
