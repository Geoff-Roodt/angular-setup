import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})

export class UserItemComponent implements OnInit {
  // We declare a string variable called name to display the user's name....
  // The @Input attribute tells the component to expect a string to be provided as a parameter when the component is printed in HTML.
  // See user-list.component.html for the implementation of this.

	@Input() name: string;

	constructor() {
	}

	ngOnInit() {
	}

}
