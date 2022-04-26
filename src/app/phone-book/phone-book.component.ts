import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../models/cotact-model';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})
export class PhoneBookComponent implements OnInit {

  public search!: string;
  public contactModel = new ContactModel();

  constructor(public ContactsService: ContactsService) { }

  ngOnInit(): void {
  }

  addContact() {
    this.ContactsService.editEvent.emit(this.contactModel);
    this.ContactsService.changeEditStatus(false);
  }

}