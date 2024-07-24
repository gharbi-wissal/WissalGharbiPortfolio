import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private language: 'en' | 'fr' = 'en';

  setLanguage(lang: 'en' | 'fr') {
    this.language = lang;
  }

  getLanguage(): 'en' | 'fr' {
    return this.language;
  }
}
