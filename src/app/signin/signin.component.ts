import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @Output() userSignedin = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {

    this.userSignedin.emit('true');

    const email = form.value.email;
    const password = form.value.password;

    console.log(email);
    console.log(password);

  }

}
