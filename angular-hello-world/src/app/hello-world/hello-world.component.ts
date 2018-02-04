import { Component, OnInit } from '@angular/core';

// The Component attribute declares this Type Script class as a component, and the Selector property sets the tag that allows us to use the component in our HTML.
// The template URL links an HTML file to be rendered whenever this component is references. The Template property can be used instead for simple, in-line HTML.
// Similarly, the Style URL links a CSS file for Component-specific styles. The Styles property can be used for in-line component styling rather than linking a file.

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})

export class HelloWorldComponent implements OnInit {
  // If we have component specific variables this is where they would go

  // The constructor allows us to setup/initialise our component for use
  constructor() { }

  // ngOnInit allows us to run specific code when the component is initialised. THIS RUNS BEFORE THE CONSTRUCTOR.
  ngOnInit() {
  }

}
