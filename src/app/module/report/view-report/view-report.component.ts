import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-view-report',
  standalone: true,
  imports: [ 
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule],
  templateUrl: './view-report.component.html',
  styleUrl: './view-report.component.scss'
})
export class ViewReportComponent {
  formView: boolean = false;
  employeeList: any[] = [];
  empView: any;
  empCode: string = '';
  loginForm!:FormGroup

  constructor(
    private http: HttpClient,
    private dialogRef : MatDialogRef<ViewReportComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
    console.log("data",data)
  }

  ngOnInit(): void {
    this.empView = this.data; 
  }

// onClose():void{
//   this.dialogRef.close('yes');
//  }

}
