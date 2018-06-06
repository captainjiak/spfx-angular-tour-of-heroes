import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../hero';
require("./hero-detail.component.css");

@Component({
    selector: 'app-hero-detail',
    templateUrl: '/src/webparts/angular2App/app/components/hero-detail/hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor() { }

    ngOnInit() {
    }

}