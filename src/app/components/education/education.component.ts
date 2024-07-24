import { Component, Input } from '@angular/core';
import { EducationEntry, Section } from '../../models/data';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  @Input() education: Section<EducationEntry> | null = null

}
