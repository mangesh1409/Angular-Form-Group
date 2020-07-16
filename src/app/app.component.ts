import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormGroup';
  data;
  name:string;
  email:string;
  phone:string;

  profileForm = new FormGroup({
    fgname : new FormControl(''),
    fgemail : new FormControl(''),
    fgphone : new FormControl('')
  });

  Submitdata(){
    console.log(this.profileForm.value);
    this.data = this.profileForm.value;
    console.log(this.profileForm.controls);
  }
}
