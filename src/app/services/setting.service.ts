import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  private linkTheme = document.querySelector('#theme');
  links!: NodeListOf<Element>;

  constructor() {
    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linkTheme?.setAttribute('href', url);
   }
   cambiartema(colorTema: string){
    const url = `./assets/css/colors/${colorTema}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.currentTheme()
  }
  currentTheme(){
    const links = document.querySelectorAll(".selector");
    links.forEach( link => {
      link.classList.remove('working');

      const btn = link.getAttribute('data-theme');
      const url = `./assets/css/colors/${btn}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if ( url == currentTheme ){
        link.classList.add('working');
      }
    } )
  }

}
