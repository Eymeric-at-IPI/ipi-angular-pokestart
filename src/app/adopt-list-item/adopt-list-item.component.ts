import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Pokemon} from "../models/models";

@Component({
  selector: 'app-adopt-list-item',
  templateUrl: './adopt-list-item.component.html',
  styleUrls: ['./adopt-list-item.component.css']
})
export class AdoptListItemComponent implements OnInit {
	@Output() itemDeleteEvent = new EventEmitter<string>();

	@Input() pokemon!: Pokemon;  constructor() { }



  	ngOnInit(): void {
  	}

  	// comment faire remonter le delete ?
	handleDeleteButton() {
		this.itemDeleteEvent.emit(this.pokemon.name);
	}
}
