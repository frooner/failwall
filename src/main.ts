import API from '@aws-amplify/api';
import Amplify from '@aws-amplify/core';
import { AppModule } from './app/app.module';
import PubSub from '@aws-amplify/pubsub';
import awsconfig from './aws-exports';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

API.configure(awsconfig);
PubSub.configure(awsconfig);
Amplify.configure(awsconfig);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
