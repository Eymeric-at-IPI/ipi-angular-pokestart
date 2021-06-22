import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../models/models";

@Component({
  selector: 'app-adopt-dropdown-button',
  templateUrl: './adopt-dropdown-button.component.html',
  styleUrls: ['./adopt-dropdown-button.component.css']
})
export class AdoptDropdownButtonComponent implements OnInit {

	/*
	tableau avec les adopter, unicite sur le nom
	 */
	adoptedPokemon: Set<Pokemon>;

  constructor() {
  	this.adoptedPokemon = new Set<Pokemon>();
  	this.adoptedPokemon.add({abilities: [], height: 0, name: "", sprites: {front_default: ""}, types: [], weight: 0})
  }

  ngOnInit(): void {
  }

  getNumberOfAdoptedokemon(): number {
  	return this.adoptedPokemon.size;
  }

  addPokemon(pokemon: Pokemon): boolean {
  	if (true) {
  		console.log("can add");
  		return true;
	}

  	console.log("can't add");
  	return false;
  }

  handleAdoptThemAllButton() {
  	alert("You catch them all !")
  }

}
