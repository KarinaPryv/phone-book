import { Pipe, PipeTransform } from '@angular/core';
import { ContactModel } from 'src/app/models/cotact-model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arrContacts: Array<ContactModel>, sort: string, column: string): Array<ContactModel> {
    if (!sort) return arrContacts;
    switch (column) {
      case 'firstName':
        if (sort == 'up') {
          return arrContacts.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((a.firstName < b.firstName) ? -1 : 0));
        }
        return arrContacts.sort((a, b) => (a.firstName < b.firstName) ? 1 : ((a.firstName > b.firstName) ? -1 : 0));
        break;
      case 'lastName':
        if (sort == 'up') {
          return arrContacts.sort((a, b) => (a.lastName > b.lastName) ? 1 : ((a.lastName < b.lastName) ? -1 : 0));
        }
        return arrContacts.sort((a, b) => (a.lastName < b.lastName) ? 1 : ((a.lastName > b.lastName) ? -1 : 0));
        break;
      case 'number':
        if (sort == 'up') {
          return arrContacts.sort((a, b) => (a.phoneNumber > b.phoneNumber) ? 1 : ((a.phoneNumber < b.phoneNumber) ? -1 : 0));
        }
        return arrContacts.sort((a, b) => (a.phoneNumber < b.phoneNumber) ? 1 : ((a.phoneNumber > b.phoneNumber) ? -1 : 0));
        break;
      default:
        return arrContacts;
    }
  }
}