import { Injectable } from '@angular/core';

@Injectable()
export class MessageProvider {

  constructor( ) {
  }
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
