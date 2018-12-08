import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: Hero;
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {
    this.heroService.getHeroes().subscribe(data => {
      this.heroes = data;
    });

    this.heroService.refresh$.subscribe(data => {
      console.log(this.heroes);
      this.selectedHero = this.heroes.find(item => item.hero_id === data ? true : false);
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.selectedHero = event.url === '/heroes' ? null : this.selectedHero;
      }
    });

    this.hero = new Hero(1, 'winstorm');
  }

  ngOnInit() {

  }

  onSave(event: any) {
    console.log(event);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
