import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input()
  public rate: number = 0;

  private stars: Array<boolean>;

  constructor() { 
    
  }

  ngOnInit() {
    this.stars = [];
    for (let i = 1; i<=5; i++){
      this.stars.push(i>this.rate);
    }
  }

}
