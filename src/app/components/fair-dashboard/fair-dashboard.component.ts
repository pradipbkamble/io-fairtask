import { Component, Input, OnInit } from '@angular/core';
import { Ifairs } from 'src/app/interface/fair';
import { fairsArr } from 'src/app/model/fairdata';

@Component({
  selector: 'app-fair-dashboard',
  templateUrl: './fair-dashboard.component.html',
  styleUrls: ['./fair-dashboard.component.scss']
})
export class FairDashboardComponent implements OnInit {
fairdata:Array<Ifairs>=fairsArr
faircard!: Ifairs;
selectedid!:string

  constructor() { }

  ngOnInit(): void {
    this.faircard=this.fairdata[0]
    this.selectedid=this.fairdata[0].fairId
  }
  onclick(eve:Ifairs){
console.log(eve);
this.faircard=eve
this.selectedid=this.faircard.fairId


  }
}
