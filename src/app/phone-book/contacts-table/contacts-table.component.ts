import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactModel } from 'src/app/models/cotact-model';
import { ContactsService } from 'src/app/services/contacts.service';
import { SearchPipe } from '../pipes/search.pipe';
import { SortPipe } from '../pipes/sort.pipe';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent implements OnInit {

  @Input() search!: string;

  public contactsArr = new Array<ContactModel>();
  public isSortFirstName!: boolean; isSortLastName!: boolean; isSortNumber!: boolean;
  public isSortUp = true;
  public sortType!: string;
  public columnType = 'firstName';

  constructor(public ContactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsArr = this.ContactsService.getAllContacts();
  }

  deleteContact(contactIndex: number) {
    this.ContactsService.deleteContact(contactIndex);
  }

  editContact(contact: ContactModel, indexOfEditedContact: number) {
    this.ContactsService.editEvent.emit(contact);
    this.ContactsService.indexOfEditedContact = indexOfEditedContact;
    this.ContactsService.changeEditStatus(true);
  }

  sort(sortType: string, columnType: string) {
    this.isSortFirstName = false;
    this.isSortLastName = false;
    this.isSortNumber = false;

    this.sortType = sortType;
    this.columnType = columnType;
    this.isSortUp = !this.isSortUp;

    if (columnType == 'firstName') {
      this.isSortFirstName = true;
    }
    else if (columnType == 'lastName') {
      this.isSortLastName = true;
    }
    else if (columnType == 'number') {
      this.isSortNumber = true;
    }
  }

}