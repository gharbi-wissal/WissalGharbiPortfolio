import { Component, Input } from '@angular/core';
import { About } from '../../models/data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @Input() about: About | null = null;

}
