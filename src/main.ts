import {bootstrapApplication} from '@angular/platform-browser';
import {provideClientHydration} from '@angular/platform-browser';
import {provideRouter,withInMemoryScrolling} from '@angular/router';
import {AppComponent} from './app/app.component';
import {routes} from './app/app.routes';

bootstrapApplication(AppComponent,{providers:[provideClientHydration(),provideRouter(routes,withInMemoryScrolling({scrollPositionRestoration:'top',anchorScrolling:'enabled'}))]}).catch(console.error);