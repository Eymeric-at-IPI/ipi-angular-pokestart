import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokeAPIResult, Pokemon, PokemonInfo} from "../models/models";

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

	constructor(private httpClient: HttpClient) {}

	fetchAll(): Observable<PokeAPIResult<PokemonInfo>> {
		return this.httpClient.get<PokeAPIResult<PokemonInfo>>(this.API_URL);
	}

	fetchOne(pokemonURL: string): Observable<Pokemon> {
		return this.httpClient.get<Pokemon>(pokemonURL);
	}
}
