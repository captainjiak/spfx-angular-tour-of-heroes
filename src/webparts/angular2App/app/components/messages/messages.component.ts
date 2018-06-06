import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
require('./messages.component.css');

@Component({
    selector: 'app-messages',
    templateUrl: '/src/webparts/angular2App/app/components/messages/messages.component.html',
})
export class MessagesComponent implements OnInit {

    constructor(public messageService: MessageService) { }

    ngOnInit() {
    }

}