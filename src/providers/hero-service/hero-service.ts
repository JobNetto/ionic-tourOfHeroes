import { Injectable } from '@angular/core';
import { HEROES } from '../../mock-heroes';
import { Observable } from 'rxjs';
import { Hero } from '../../hero';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroServiceProvider {

  constructor( ) {
  }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  
}
