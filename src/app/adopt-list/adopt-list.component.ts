import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../models/models";
import {AdoptionCartService} from "../services/adoption-cart.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-adopt-list',
  templateUrl: './adopt-list.component.html',
  styleUrls: ['./adopt-list.component.css']
})
export class AdoptListComponent implements OnInit {

	// TODO : utilise un service qui maininer l'observer
	adoptionList: Set<Pokemon> | undefined;
	adoptionListSubscription: Subscription | undefined;

  	constructor(private adoptionCartService: AdoptionCartService) {}

  	ngOnInit(): void {
  		this.adoptionListSubscription = this.adoptionCartService
			.adoptionListSubject
			.subscribe((adoptionList: Set<Pokemon>) => {
				this.adoptionList = adoptionList;
		})
		this.adoptionCartService.emitAdoptionListSubkect();
  	}

	deleteItem(pokemonName: string) {
		alert(pokemonName);
	}

	ajoutItem(pokemon: Pokemon) {

	}

}
