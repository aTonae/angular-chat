import { Component, OnInit, Input } from '@angular/core';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})


export class ChatWindowComponent implements OnInit {




  constructor(private messageService: MessageServiceService) {
    //this.chatHistory = messageService.defaultContact.history;

    //console.log(this.chatHistory);
   }

  ngOnInit() {



  }

}
