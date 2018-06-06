import { Component } from '@angular/core';
import { HeroService } from "../app/services/hero.service";
import { MessageService } from "../app/services/message.service";
require('./app.component.css');

@Component({
  selector: 'app-root',
  templateUrl: '/src/webparts/angular2App/app/app.component.html',
  providers: [HeroService, MessageService]
})
export class AppComponent {
  private title = 'Tour of Heroes';
}