import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: Hero;
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
    this.hero = new Hero(1, 'winstorm');
  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(data => this.heroes = data);
  }

  onSave(event: any) {
    console.log(event);
  }

  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }

}
