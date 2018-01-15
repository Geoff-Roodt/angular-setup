# angular-setup
---  
### Lesson I: Setting Up Angular (Hello World)  
_Things you must do:_
+ Download and install (Node.js)[https://nodejs.org/en/download]
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
