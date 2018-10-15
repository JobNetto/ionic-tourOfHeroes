import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HeroesPageModule } from '../pages/heroes/heroes.module';
import { HeroesTesteComponent } from '../components/heroes-teste/heroes-teste';
import { HeroesDetailsComponent } from '../components/heroes-details/heroes-details';
import { HeroServiceProvider } from '../providers/hero-service/hero-service';
import { MessageProvider } from '../providers/message/message';
import { MessageComponent } from '../components/message/message';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HeroesTesteComponent,
    HeroesDetailsComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HeroesPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HeroesTesteComponent,
    HeroesDetailsComponent,
    MessageComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HeroServiceProvider,
    MessageProvider
  ]
})
export class AppModule {}
