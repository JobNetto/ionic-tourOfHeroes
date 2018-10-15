import { NgModule } from '@angular/core';
import { HeroesTesteComponent } from './heroes-teste/heroes-teste';
import { HeroesDetailsComponent } from './heroes-details/heroes-details';
import { MessageComponent } from './message/message';
@NgModule({
	declarations: [HeroesTesteComponent,
    HeroesDetailsComponent,
    MessageComponent],
	imports: [],
	exports: [HeroesTesteComponent,
    HeroesDetailsComponent,
    MessageComponent]
})
export class ComponentsModule {}
