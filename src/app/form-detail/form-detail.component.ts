import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Contact } from '../contact.model';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnInit {

  firstName: string;
  lastName: string;
  location: string;
  exp: number;

  onUserAdded = false;

  // contact: Contact;
 @Output() userAdded = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.onUserAdded = true;
     this.firstName = form.value.firstname;
     this.lastName = form.value.lastname;
     this.location = form.value.location;
     this.exp = form.value.experience;

    //  this.contact = new Contact(this.firstName, this.lastName, this.location, this.exp);

     // this.userAdded.emit(this.contact);
    //  this.userAdded.emit('test');

      // console.log(this.contact.firstName);
      // console.log(this.contact.lastName);
      // console.log(this.contact.location);
      // console.log(this.contact.exp);
  }

}
