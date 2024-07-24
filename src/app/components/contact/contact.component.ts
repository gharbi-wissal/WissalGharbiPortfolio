import { Component, Input } from '@angular/core';
import { Contact } from '../../models/data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input() contact: Contact | null = null;

}
