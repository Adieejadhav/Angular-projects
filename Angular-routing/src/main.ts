import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { HomePage } from './app/home-page/home-page';

bootstrapApplication(HomePage, appConfig)
  .catch((err) => console.error(err));
