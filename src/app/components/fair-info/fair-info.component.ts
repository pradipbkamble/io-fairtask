import { Component, Input, OnInit } from '@angular/core';
import { Ifairs } from 'src/app/interface/fair';

@Component({
  selector: 'app-fair-info',
  templateUrl: './fair-info.component.html',
  styleUrls: ['./fair-info.component.scss']
})
export class FairInfoComponent implements OnInit {
  @Input() fordetails!:Ifairs
  constructor() { }

  ngOnInit(): void {

  }

}
