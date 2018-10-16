import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gundam-management',
  templateUrl: './gundam-management.component.html',
  styleUrls: ['./gundam-management.component.css']
})
export class GundamManagementComponent implements OnInit {

  private gundams: Array<gundam>;

  constructor() { }

  ngOnInit() {
    this.gundams = [
      new gundam("F90", "GUNDAM F90", 50, 4.5, "GUNDAM F90 is the original gundam in all series", ["HG","RG"]),
      new gundam("FA-93HWS", "HEAVY WEAPON SYSTEM Nu GUNDAM", 75.5, 4.6, "Nu GUNDAM is the strongest gundam operated by AMUNO", ["HG","RG"]),
      new gundam("GF2-014NA", "GUNDAM FREEDOM", 120, 5.0, "GUNDAM FREEDOM is my favourite gundam", ["HG","RG"]),
      new gundam("ZGMF-X10A", "FREEDOM GUNDAM", 85, 4.8, "FREEDOM GUNDAM may be another version", ["HG","RG"]),
    ]
  }

}

export class gundam {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public rate: number,
    public desc: string,
    public categories: Array<string>
  ){

  }
}