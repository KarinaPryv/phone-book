import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { ContactsTableComponent } from './phone-book/contacts-table/contacts-table.component';
import { FormsModule } from '@angular/forms';
import { ContactsService } from './services/contacts.service';
import { SearchPipe } from './phone-book/pipes/search.pipe';
import { ModalAddContactComponent } from './phone-book/modal-add-contact/modal-add-contact.component';
import { SortPipe } from './phone-book/pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookComponent,
    ContactsTableComponent,
    SearchPipe,
    SortPipe,
    ModalAddContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }