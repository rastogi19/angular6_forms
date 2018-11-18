import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // accessing form object without passing it to the submit method. so it can be accessed anytime instead of just when submitted.
  @ViewChild('f') signupForm : NgForm;
  defaultQuestion = 'pet';
  answer = '';
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form : NgForm) {
  //   console.log('submitted!', form);
  // }
  onSubmit() {
    console.log(this.signupForm);
    
  }
}
