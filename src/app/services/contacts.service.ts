import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ContactModel } from '../models/cotact-model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts: Array<ContactModel> =
    [
      { firstName: 'karina', lastName: 'pryvarska', phoneNumber: '0951534509' },
      { firstName: 'andrew', lastName: 'riabii', phoneNumber: '0954166765' },
      { firstName: 'yulia', lastName: 'krychylska', phoneNumber: '0970552806' },
      { firstName: 'vitalii', lastName: 'ostapchuk', phoneNumber: '0978479874' }
    ];

  public indexOfEditedContact!: number;
  public editStatus!: boolean;
  public editEvent = new EventEmitter<ContactModel>();

  constructor() { }

  getAllContacts() {
    return this.contacts;
  }

  addNewContact(firstName: string, lastName: string, phoneNumber: string) {
    let newContact = new ContactModel();
    newContact.firstName = firstName;
    newContact.lastName = lastName;
    newContact.phoneNumber = phoneNumber;
    this.contacts.push(newContact);
  }

  saveEditedContact(firstName: string, lastName: string, phoneNumber: string) {
    let editedContact = new ContactModel();
    editedContact.firstName = firstName;
    editedContact.lastName = lastName;
    editedContact.phoneNumber = phoneNumber;
    this.contacts.splice(this.indexOfEditedContact, 1, editedContact);
  }

  deleteContact(contactIndex: number) {
    this.contacts.splice(contactIndex, 1);
  }

  changeEditStatus(status: boolean) {
    this.editStatus = status;
  }

}