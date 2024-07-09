import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  dataSave(){
    localStorage.setItem("Name", "Sanjeev");
    localStorage.setItem("Country", "India");
    localStorage.setItem("Age", "22");
  }

  get(){
    localStorage.getItem('Name');
  }

  dataRemove(){
    localStorage.removeItem("Name");
    localStorage.removeItem("Country");
    localStorage.removeItem("Age");
  }
  deleteAll(){
    localStorage.clear();
  }

}
