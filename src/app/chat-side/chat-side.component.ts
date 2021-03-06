import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service.service';
@Component({
  selector: 'app-chat-side',
  templateUrl: './chat-side.component.html',
  styleUrls: ['./chat-side.component.css']
})
export class ChatSideComponent implements OnInit {

   contactList = [];
  constructor(private messageService: MessageServiceService) {

    messageService.getServerContact().subscribe((data) => {
      console.log(data);
        //this.contactList = data;
      messageService.setContactList(data);
    });
    // this.contactList = messageService.contactList;
  }

  ngOnInit() {
  }

}
