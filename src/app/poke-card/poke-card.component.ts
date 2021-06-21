import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {
	@Input() name : string = "pokemon";

  	constructor() { }

  	ngOnInit(): void {
  	}

  	getName() {
  		return this.name;
	}

}
