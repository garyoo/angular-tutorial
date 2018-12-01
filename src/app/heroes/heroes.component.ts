import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /*
  hero: Hero = {
    id: 1,
    name: 'WinStorm'
  };
  */
  hero: Hero;
  heroes;

  constructor() {
    this.heroes = HEROES;
    this.hero = new Hero(1, 'windstorm');
  }

  ngOnInit() {

  }

  onSave(event: any) {
    console.log(event);
  }

}
