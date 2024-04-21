import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ifairs } from 'src/app/interface/fair';

@Component({
  selector: 'app-fair-card',
  templateUrl: './fair-card.component.html',
  styleUrls: ['./fair-card.component.scss']
})
export class FairCardComponent implements OnInit {
@Input() fairchild!:Ifairs
@Output() forid:EventEmitter<Ifairs>=new EventEmitter<Ifairs>()

@Input() carids!:string
  constructor() { }

  ngOnInit(): void {
   
  }
  ondetails(ids:any){
    this.forid.emit(ids)
    console.log(ids);
    
    
   
    
    
  // for (const key in ids) {
  //   this.fairactiveid=ids[key].fairId 
  // }
    
  }
}
