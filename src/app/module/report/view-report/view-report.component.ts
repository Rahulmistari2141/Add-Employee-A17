import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-view-report',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule],
  templateUrl: './view-report.component.html',
  styleUrl: './view-report.component.scss'
})
export class ViewReportComponent {
  formView: boolean = false;
  employeeList: any[] = [];
  empView: any;
  empCode: string = '';
  loginForm!: FormGroup
  employeeObj: any;
  emp: any;

  constructor(
    private http: HttpClient,
    private dialogRef: MatDialogRef<ViewReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
  ) {
    console.log("data", data)
  }

  ngOnInit(): void {
    this.empView = this.data;
    this.emp = this.data
  }

  onEdit(id: number) {
    this.router.navigate(['./app-home'], {
      queryParams: { id: id },
    });

    // this.http.get("https://freeapi.gerasim.in/api/EmployeeApp/GetEmployeeByEmployeeId?id=" + id).subscribe((res: any) => {
    //   this.employeeObj = res.data;
    //   console.log("data", this.data)
    // });
  }

  onClose(): void {
    this.dialogRef.close('yes');
  }

}
