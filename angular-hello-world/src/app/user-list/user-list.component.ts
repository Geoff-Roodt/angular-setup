import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  // An array of strings
	names: string[];

	constructor() {
    // Setting up our array
		this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
	}

	ngOnInit() {
	}

}
