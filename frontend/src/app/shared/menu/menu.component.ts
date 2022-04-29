import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  @Input() name: string = 'home';

  items: MenuItem[] = [];
  activeItem: MenuItem = {};

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/home' },
      { label: 'Cars', icon: 'pi pi-fw pi-car', routerLink: '/cars' },
      { label: 'Companies', icon: 'pi pi-fw pi-briefcase', routerLink: '/companies' }
    ];

    this.activeItem = this.items.find(item => item.label?.toLowerCase() === this.name.toLowerCase()) || this.items[0];
  }
}
