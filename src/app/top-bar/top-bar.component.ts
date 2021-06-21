import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit{
	@Input() title: string = 'undefined';

	constructor() {

	}

	ngOnInit(): void {
	}

	getTitle() {
		return this.title
	}

	getNbAdopt() {
		return 0;
	}
}
