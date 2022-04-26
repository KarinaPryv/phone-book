import { Pipe, PipeTransform } from '@angular/core';
import { ContactModel } from 'src/app/models/cotact-model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrContacts: Array<ContactModel>, search: string): Array<ContactModel> {
    if (!search) return arrContacts;
    return arrContacts.filter(contact => contact.firstName.toLowerCase().includes(search.toLowerCase()) || 
                                         contact.lastName.toLowerCase().includes(search.toLowerCase()) || 
                                         contact.phoneNumber.includes(search));
  }

}
