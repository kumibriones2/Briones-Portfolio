import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    console.log('Message Sent:', this.contact);
    alert('Your message has been sent successfully!');
    this.contact = { name: '', email: '', message: '' }; 
  }
}
