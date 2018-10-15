import { Component, Input } from '@angular/core';
import { Hero } from '../../hero';

/**
 * Generated class for the HeroesDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'heroes-details',
  templateUrl: 'heroes-details.html'
})
export class HeroesDetailsComponent {

  @Input()hero:Hero;

  constructor() {
  }

}
