import {DOCUMENT,isPlatformBrowser} from '@angular/common';
import {Inject,Injectable,PLATFORM_ID,signal} from '@angular/core';

@Injectable({providedIn:'root'})
export class ThemeService{
  dark=signal(false);
  constructor(@Inject(DOCUMENT) private document:Document,@Inject(PLATFORM_ID) platformId:object){
    if(!isPlatformBrowser(platformId)){return;}
    const saved=localStorage.getItem('theme');
    const value=saved==='dark'||(!saved&&matchMedia('(prefers-color-scheme: dark)').matches);
    this.dark.set(value);
    this.apply(value);
  }
  toggle(){const value=!this.dark();this.dark.set(value);this.apply(value);localStorage.setItem('theme',value?'dark':'light');}
  private apply(value:boolean){this.document.documentElement.dataset['theme']=value?'dark':'light';}
}