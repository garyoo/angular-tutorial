import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero;
  heroes;
  selectedHero: Hero;

  constructor() {
    this.heroes = HEROES;
    this.hero = new Hero(1, 'windstorm');
  }

  ngOnInit() {

  }

  onSave(event: any) {
    console.log(event);
  }

  onSelect(hero: Hero): void {
    console.log(hero)
    this.selectedHero = hero;
  }

}
