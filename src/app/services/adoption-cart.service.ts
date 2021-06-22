import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Pokemon} from "../models/models";
import {PokeCardComponent} from "../poke-card/poke-card.component";

@Injectable({
  providedIn: 'root'
})
export class AdoptionCartService {
	adoptionListSubject = new Subject<Set<Pokemon>>();

	private adoptionList : Set<Pokemon>;

  	constructor() {
  		this.adoptionList = new Set<Pokemon>();
  		this.adoptionList.add({
			abilities: [],
			height: 0,
			name: "test",
			sprites: {front_default: ""},
			types: [],
			weight: 0
		});
		this.adoptionList.add({
			abilities: [],
			height: 0,
			name: "test2",
			sprites: {front_default: ""},
			types: [],
			weight: 0
		});
	}

	emitAdoptionListSubkect() {
  		this.adoptionListSubject.next(this.adoptionList);
	}

	adopt(pokemon: Pokemon) {
  		this.adoptionList.add(pokemon);
  		this.emitAdoptionListSubkect();
	}

	unAdopt(pokemon: Pokemon) {
		this.adoptionList.delete(pokemon);
		this.emitAdoptionListSubkect();
	}
}
