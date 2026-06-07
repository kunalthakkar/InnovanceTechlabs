import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {

  formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  };

  loading = false;
  successMessage = '';

 sendEmail() {

  if (!this.formData.name || !this.formData.email || !this.formData.message) {
    this.successMessage = 'Please fill required fields!';
    return;
  }

  this.loading = true;
  this.successMessage = '';

  const templateParams = {
    name: this.formData.name,
    email: this.formData.email,
    phone: this.formData.phone,
    company: this.formData.company,
    subject: this.formData.subject,
    message: this.formData.message
  };

  emailjs.send(
    'service_awy8fim',
    'template_003pvg9',
    templateParams,
    'DcC2rT3LbUaY_TzgE'
  )
  .then((res) => {
    console.log('SUCCESS:', res);
    this.successMessage = 'Message sent successfully!';
    this.loading = false;

    this.formData = {
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    };
  })
  .catch((error: any) => {
    console.log('ERROR:', error);
    this.successMessage = 'Failed to send message!';
    this.loading = false;
  });
}
}