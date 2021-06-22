import { Component, OnInit } from '@angular/core';
import { PokemonsService } from "../services/pokemons.service";
import { Pokemon } from "../models/Pokemon";
import { async } from "rxjs";
import {APIPokemons} from "../models/APIPokemons";

@Component({
  selector: 'app-poke-card-list',
  templateUrl: './poke-card-list.component.html',
  styleUrls: ['./poke-card-list.component.css']
})
export class PokeCardListComponent implements OnInit {

	pokemons: APIPokemons[] = [];

  	constructor(private apiService: PokemonsService) { }

	ngOnInit(): void {
		this.pokemons = this.apiService.fetchData();
	}

	getPokemons(): APIPokemons[] {
  		return this.pokemons;
	}

}

// TODO : un objet pokemon ?
