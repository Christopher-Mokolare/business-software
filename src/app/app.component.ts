import {Component,signal} from '@angular/core';
import {Router,RouterLink,RouterOutlet} from '@angular/router';
import {ThemeService} from './theme.service';
import {SeoService} from './seo.service';

@Component({
  selector:'ms-root',
  standalone:true,
  imports:[RouterOutlet,RouterLink],
  templateUrl:'./app.component.html'
})
export class AppComponent{
  menu=signal(false);
  constructor(public theme:ThemeService,router:Router,seo:SeoService){
    seo.update(router.url);
  }
}