import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from './contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isActiveUser = false;
  isUserAdded = false;


 onUserSignedin(temp: string) {

    this.isActiveUser = true;

 }

 onUserAdded(contact: Contact) {
    this.isUserAdded = true;
    console.log(contact.firstName);
    console.log(contact.lastName);
    console.log(contact.location);
    console.log(contact.exp);


  // console.log(form.value.lastName);
     
    //  const firstName = form.value.firstname;
    //  const lastName = form.value.lastname;
    //  const location = form.value.location;
    //  const experience = form.value.experience;

    //  console.log(firstName);
    //  console.log(lastName);
    //  console.log(location);
    //  console.log(experience);
 }
}
