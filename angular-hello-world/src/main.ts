import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// This is what links our App.Module TypeScript class in the app folder to the main index
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
