import { Component, OnInit } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
 Model:any={};
  constructor() { 
    console.log("Lazy loading")
  }
 
  submit(data:any){
    console.log(data);
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.Model, null, 4));
 
   }

  ngOnInit(): void {
  }

}
