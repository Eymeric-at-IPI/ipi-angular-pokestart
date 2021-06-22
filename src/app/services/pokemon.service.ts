import { Injectable } from '@angular/core';
import {Pokemon} from "../models/Pokemon";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
	header: new HttpHeaders({
		'Content-Type': 'application/json',
	})
};

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
	pokemon: Pokemon = {abilities: ["", ""], name: "", spriteUrl: "", types: ["", ""], weight: 0};

  	constructor(private httpClient: HttpClient) {}

	fetchData(pokemonURL: string, name: string): Pokemon {
		this.httpClient
			.get<any>(pokemonURL)
			.subscribe(response => {
				this.pokemon = {
					name: name,
					abilities: [
						response.abilities[0].ability.name,
						response.abilities[1] ? response.abilities[1].ability.name : undefined
					],
					types: [
						response.types[0].type.name,
						response.types[1] ? response.types[1].type.name : undefined
					],
					spriteUrl: response.sprites.front_default,
					weight: response.weight
				};
			}, error => {
				console.log("Error : " + error);
			});

		//if (!result) result = {abilities: ["", ""], name: "", spriteUrl: "", types: ["", ""], weight: 0};

		return this.pokemon;
	}}
