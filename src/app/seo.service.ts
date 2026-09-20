import {Injectable} from '@angular/core';
import {Meta,Title} from '@angular/platform-browser';
import {NavigationEnd,Router} from '@angular/router';
import {filter} from 'rxjs';

@Injectable({providedIn:'root'})
export class SeoService{
  private readonly pages:Record<string,{title:string;description:string}>={
    '/':{title:'Workshape — Software built around how real workflows actually work.',description:'Explore practical software concepts and working projects designed to replace manual processes, connect disconnected tools and improve digital experiences.'},
    '/services':{title:'Services — Workshape',description:'Business systems, customer portals, workflow automation, payment integrations, mobile applications and legacy modernisation.'},
    '/work':{title:'Work — Workshape',description:'Selected software projects exploring fintech, marketplaces, payments, transport operations and business workflows.'},
    '/process':{title:'Process — Workshape',description:'A practical software delivery process: understand the business, design the system, build the workflow and operate it reliably.'},
    '/contact':{title:'Contact — Workshape',description:'Tell Workshape what your business needs to improve and start a conversation about software.'}
  };

  constructor(private router:Router,private title:Title,private meta:Meta){
    this.router.events.pipe(filter((event):event is NavigationEnd=>event instanceof NavigationEnd)).subscribe(event=>this.update(event.urlAfterRedirects));
  }

  update(url:string){
    const path=url.split('?')[0].split('#')[0].replace(/\/$/,'')||'/';
    const page=this.pages[path]??this.pages['/'];
    this.title.setTitle(page.title);
    this.meta.updateTag({name:'description',content:page.description});
    this.meta.updateTag({property:'og:title',content:page.title});
    this.meta.updateTag({property:'og:description',content:page.description});
  }
}