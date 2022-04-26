import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactModel } from '../../models/cotact-model';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-modal-add-contact',
  templateUrl: './modal-add-contact.component.html',
  styleUrls: ['./modal-add-contact.component.scss']
})
export class ModalAddContactComponent implements OnInit {

  public contactModel = new ContactModel();
  public editStatus!: boolean;

  constructor(public ContactsService: ContactsService) {
    this.contactModel = new ContactModel();
    this.contactModel = new ContactModel();
    ContactsService.editEvent.subscribe((contact) => {
      this.contactModel = { ...contact };
    });
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.editStatus = this.ContactsService.editStatus;
  }

  addNewContact() {
    this.ContactsService.addNewContact(this.contactModel.firstName, this.contactModel.lastName, this.contactModel.phoneNumber);
  }

  saveEditedContact() {
    this.ContactsService.saveEditedContact(this.contactModel.firstName, this.contactModel.lastName, this.contactModel.phoneNumber);
  }
}