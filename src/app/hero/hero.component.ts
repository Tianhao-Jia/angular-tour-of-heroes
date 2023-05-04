import { Component,OnInit } from '@angular/core';

import {FormControl} from '@angular/forms';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  ngOnInit(): void {
    this.getHeroes();
  }
  heroes :Hero[] = [];
  
  selectedHero?: Hero;

  onSelect(hero:Hero){
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  constructor(private heroService:HeroService, private messageService: MessageService){}

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes); 
  }

}
