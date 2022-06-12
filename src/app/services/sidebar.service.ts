import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    { title: 'principal', icon: 'mdi mdi-gauge', submenu: [
      {title: 'Main', url: '/dashboard'},
      {title: 'Progress', url: '/dashboard/progres'},
      {title: 'Grafica', url: '/dashboard/grafica1'},
      {title: 'Promesas', url: '/dashboard/promesas'},
      {title: 'rxjs', url: '/dashboard/rxjs'}
    ]
  }]

  constructor() { }
}
