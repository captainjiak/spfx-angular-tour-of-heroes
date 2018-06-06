import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { RouterModule } from '@angular/router';
import { RouterConfig } from '../app/app.routes';
import { AppSettings } from './shared/app.settings';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AppSettings
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // RouterModule.forRoot(RouterConfig),
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }