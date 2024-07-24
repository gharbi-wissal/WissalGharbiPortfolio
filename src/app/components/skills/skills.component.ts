import { Component, Input } from '@angular/core';
import { Skills } from '../../models/data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  @Input() skills: Skills | null = null;

}
