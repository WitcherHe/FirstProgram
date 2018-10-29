import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private menus: Array<MenuLists>;
  public currentId: string;  

  constructor(public router: Router) { }

  ngOnInit() {
    this.menus = [
      new MenuLists('1', 'Main', 'main'),
      new MenuLists('2', 'Gundam List', 'gundam')
    ];
  }

  nav(menus: MenuLists){
    this.router.navigateByUrl(menus.url);
    this.currentId = menus.id;
  }
}

export class MenuLists{
  constructor(
    public id: string,
    public name: string,
    public url: string
  ){

  }
}
