import { Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';

export const RouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent }
];

