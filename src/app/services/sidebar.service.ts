import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu = [
    {
      title: 'Dashboard',
      icono: 'mdi mdi-gauge',
      subMenu:
      [
        {
          title: 'Main',
          url: 'dashboard'
        },
        {
          title: 'ProgressBar',
          url: 'progress'
        },
        {
          title: 'Grafica 1',
          url: 'grafica1'
        },
        {
          title: 'Promesas',
          url: 'promesas'
        },
        {
          title: 'RXJS',
          url: 'rxjs'
        }
      ]
    }
  ];

  constructor() { }
}
