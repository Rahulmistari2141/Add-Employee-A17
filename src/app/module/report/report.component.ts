import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    HttpClientModule,
  ],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent implements OnInit {
  formView: boolean = false;
  employeeList: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.viewAllEmployees();
  }

  viewAllEmployees(){
    this.http.get('https://freeapi.gerasim.in/api/EmployeeApp/GetAllEmployee').subscribe((res:any) => {                              
        this.employeeList = res.data;
    })
  }

}
