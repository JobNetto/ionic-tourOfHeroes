import { Component } from '@angular/core';
import { Hero } from '../../hero';
import { HeroServiceProvider } from '../../providers/hero-service/hero-service';

@Component({
  selector: 'heroes-teste',
  templateUrl: 'heroes-teste.html',
  providers: [HeroServiceProvider]
})
export class HeroesTesteComponent {

  heroes : Hero[];

  selectedHero: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  constructor(public providerHero: HeroServiceProvider) {
  }

  getHeroes(): void {
    this.providerHero.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(){
    this.getHeroes();
  }
}
