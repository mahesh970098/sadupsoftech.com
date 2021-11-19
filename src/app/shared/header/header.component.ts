import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit {

loginform: FormGroup;
sumbmitted= false;
  submitted!: boolean;


constructor(private formbuilder: FormBuilder) {

  this.loginform = this.formbuilder.group({
    name: ['', Validators.required],
    password: ['', Validators.required]

  })

}

ngOnInit(): void { }


get f() {
  return this.loginform.controls
}

onsubmit() {
  this.submitted = true;
  if (this.loginform.invalid) {
    return;
  }
  alert("Sucess" + JSON.stringify(this.loginform.value));

}

// eyefunction(){
//     x:document.getElementById("password");
//   y:document.getElementById("hide1");
//     z:document.getElementById("hide2")
//      if(this.x === 'password'){
//            this.x ="text";

//      }

// }
}


