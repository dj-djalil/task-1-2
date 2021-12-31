import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingComunicationService {

  // variable capable to receiving and sending data
  sendMessage = new Subject();
  constructor() { }
  // calling this methode in case of sending data
  communicateMessage(detail:Object){
       this.sendMessage.next(detail);
  }
}
