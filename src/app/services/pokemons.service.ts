import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Pokemon} from "../models/Pokemon";
import {Observable} from "rxjs";
import {APIPokemons} from "../models/APIPokemons";

const httpOptions = {
	header: new HttpHeaders({
		'Content-Type': 'application/json',
	})
};

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
	readonly API_URL: string = "https://pokeapi.co/api/v2/pokemon/";
	apiPokemons : APIPokemons[] = [];

	constructor(private httpClient: HttpClient) {}

	fetchData(): APIPokemons[] {
		this.httpClient
			.get<any>(this.API_URL)
			.subscribe(response => {
				response.results.forEach((result: { url: string; name: string; }) => {
					this.apiPokemons.push({
						name: result.name,
						url: result.url
					})
					// let pokemons: Pokemon[] = this.fetchOnePokemon(result.url, result.name);
					/*
					let pokemon: Pokemon = {
						abilities: ["", ""],
						name: result.name,
						spriteUrl: "",
						types: ["", ""],
						weight: 0
					}*/
					//console.log("== DEBUG ==")
					//console.log(newPokemon)
					//console.log("== FIN ==")
					// if(pokemons[0] != undefined) pokemons.push(pokemons[0]);
					// else console.log("Is UNDEFINED");
				});
			}, error => {
				console.log("Error : " + error);
			});

		return this.apiPokemons;
	}


}
