import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { filter } from 'rxjs/operators';//For rxjs 6.x version
//import 'rxjs/add/operator/filter' for rxjs 5.x version 

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private pageTitle = '';
  private pageDesc = '';
    
  constructor(public router: Router) { 
    //router 动态事件监控 - 当路由事件结束时，执行subscribe里的代码内容
    router.events.pipe(filter(event => event instanceof NavigationEnd))//instanceof判断当前事件是否为NavigationEnd类型事件
      .subscribe((event:NavigationEnd) => {
        if(event.url == '/main'){
          this.pageTitle = 'Main';
          this.pageDesc = '';
        }else if(event.url.startsWith('/gundam')){
          this.pageTitle = 'Gundam List';
          this.pageDesc = 'check your favour gundam';
        }
    })
  }

  ngOnInit() {
  }

}
