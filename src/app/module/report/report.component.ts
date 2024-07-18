import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ViewReportComponent } from './view-report/view-report.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

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
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    RouterModule
  ],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent implements OnInit {
  formView: boolean = false;
  employeeList: any[] = [];
  readonly dialog = inject(MatDialog);
  empView: any;

  constructor(private http: HttpClient,
    private matDialog:MatDialog,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.viewAllEmployees();
  }

  viewAllEmployees() {
    this.http.get('https://freeapi.gerasim.in/api/EmployeeApp/GetAllEmployee').subscribe((res: any) => {
      this.employeeList = res.data;
    })
  }


  openDialog(data?: any) {
    const dialogRef = this.matDialog.open(ViewReportComponent,{
      width: '650px',
      data: data,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      result == 'yes' ? this.empView = null : '';
    });
  };

  addNew() {
    this.router.navigate(['./app-home']);
  };
}

