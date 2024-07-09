import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { AboutComponent } from './layout/about/about.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { HomeComponent } from './module/home/home.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './module/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    AboutComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'demo-17';
  // islogin : boolean = false;

  ngOnInit(): void {
    
  }
  
   
  // login(){
  //   this.islogin=true;
  // }
  // logout(){
  //   this.islogin=false;
  // }

  // students:any[]=[
  //   {id:101, name:'chandan kumar'},
  //   {id:102, name:'arjit kumar'},
  //   {id:103, name:'sohan kumar'},
  //   {id:104, name:'vishal kumar'},
  // ]

  // displayedColumns: string[] = ['position', 'name',];
  // dataSource = ELEMENT_DATA;
}



const ELEMENT_DATA :students [] = [
  {position:101, name:'chandan kumar'},
  {position:102, name:'arjit kumar'},
  {position:103, name:'sohan kumar'},
  {position:104, name:'vishal kumar'},
]

export interface students {
  name: string;
  position: number;
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

