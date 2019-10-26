import { Component, OnInit } from '@angular/core';
import { CISService } from './CIS.service';

@Component({
  selector: 'app-cis',
  templateUrl: './cis.component.html',
  styleUrls: ['./cis.component.css']
})
export class CISComponent implements OnInit {
  depts;
  result;
  constructor(depts :CISService ) {
    this.depts= depts.getAll();
   }
   myalert(){
     alert("welcome to angular");
   }
// the event is execution from inside dom to outside dom
// to prevent any dom event outside dom execution $event.stopPropagation()
   divclick(){
     console.log("div is enteresd");
   }
   
   btnclick($event)
   {
    $event.stopPropagation()
     console.log('btn is clicked' , $event);
   }

   okeyup(){
     console.log("Stroking up");
   }
   okeyupmyself($event){
     console.log($event.target.value);
  }
  okeyupprint(name){
    this.result = name;
  }
  ngOnInit() {
  }

}
