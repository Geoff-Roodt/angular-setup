# angular-setup  

### Lesson I: Setting Up Angular (Hello World)  
_Things you must do:_
+ Download and install [Node.js](https://nodejs.org/en/download)
+ **Restart the pc**
+ Check the Node and Node Package Manager versions by running a command line- `node -v` and `npm -v`
+ Install Typescript via command line `npm install -g typescript`
+ Install Angular via command line `npm install -g @angular/cli`
+ Create a new Angular app from command line `ng new angular-hello-world`
_This will place it in `C:/Users/System32/` directory_
+ Run either `ng serve` and note the **port it specifies** then open Chrome and navigate to `localHost:4002` Or run `ng serve --open` from the command line.  

### Creating Own Component:
+ Navigate to the application directory
+ Run `ng generate component hello-world`. This will create a new folder with the Typescript class, HTML and CSS files under `src/app/hello-world/`
+ Modify the _hello-world.component.html_ file and any others as willed (CSS or changing Typescript class decorations or constructor method)
+ Modify the _app.component.html_ file to include a reference to our new _selector_ tag. Without it our component will not be compiled and displayed on the webpage.
+ Run `ng serve --open` again to see the changes. (:  

---  

+ Create another component, called user-item: `ng generate component user-item`
+ Add a property called name with a type of string to the new Typescript class (`name: string;`) within the OnInit section
+ In the constructor, declare the user name- `this.name = 'Felipe';`
+ Modify this one's html to greet with `Welcome, {{name}}`. The _template tags_ allow us to leverage the name property from the bound user-item class.  

---  

+ Create another component, called user-list: `ng generate component user-list`
+ Add an array of strings to the TS class- `name: string[];`
+ Then, construct the array of strings: `this.name = ['Ari','Carlos','Felipe','Nate'];`
+ Modify the HTML to loop over the array and print out the name: `<ul> <li *ngFor="let name of names"> Hello {{name}} </li> </ul>`
+ Modify the _App Component HTML_ to reference the user-list tag rather than user-item
+ Run the server and refresh the page!  

---  

+ Modify **_item-component.ts_** to import **Include** the input action: `import { ..., Input} from '@angular/core';`
+ Remove its reference in the constructor, and append `@Input() ` in the same line before the property declaration
+ Modify **_user-component.html** to soley print the name using template tags
+ Modify **_list-component.html_** to reference the item tag, passing through the name, instead of printing Hello name: `<app-user-item [name]="name"></app-user-item>`  

---  
