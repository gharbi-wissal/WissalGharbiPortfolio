import { Component, Input } from '@angular/core';
import { ExperienceEntry, Section } from '../../models/data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  @Input() experience: Section<ExperienceEntry> | null = null;
}
