import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  sourceTheme = document.querySelector('#theme');
  constructor() {
    console.log('Setting service init');
    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    this.sourceTheme?.setAttribute('href', url);
   }

   changeTheme(theme: string): void{
    const url = `./assets/css/colors/${theme}.css`;

    this.sourceTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(): void{
    const links = document.querySelectorAll('.selector');
    links.forEach(element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.sourceTheme?.getAttribute('href');
      if (btnThemeUrl === currentTheme) {
        element.classList.add('working');
      }
    });
  }
}
