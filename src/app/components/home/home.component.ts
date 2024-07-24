import { AfterViewInit, Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { DataService } from '../../services/data.service';
import { LanguageService } from '../../services/language.service';
import { DataModel } from '../../models/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {
  data!: DataModel;
  language!: 'en' | 'fr';

  constructor(
    private dataService: DataService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.language = this.languageService.getLanguage();
    this.loadData();
  }
  ngAfterViewInit() {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    sections.forEach((section) => observer.observe(section));
  }
  switchLanguage(lang: 'en' | 'fr') {
    this.languageService.setLanguage(lang);
    this.language = lang;
    this.loadData();
  }

  loadData(): void {
    this.dataService.getData(this.language).subscribe((data) => {
      this.data = data;
    });
  }
}
