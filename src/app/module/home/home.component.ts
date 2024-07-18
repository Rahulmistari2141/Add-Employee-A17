import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { AboutComponent } from '../../layout/about/about.component';
import { DashboardComponent } from '../../layout/dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent,
    DashboardComponent,
    CommonModule,
    RouterOutlet,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    HttpClientModule,
    MatSelectModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  designationList: any[] = [];
  roleList: any[] = [];
  stepperCompletionValue: number = 11;
  employeeId:any;
  editEmployee:any

  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.activatedRoute?.queryParamMap.subscribe((queryParam) => {
      this.employeeId = queryParam.get('id');
     console.log(this.employeeId )
   });
  }

  ngOnInit(): void {
    this.loadDesignations();
    this.loadRoles();
    this.employeeId !=0 ? this.onedit(this.employeeId) : ''  
  }

  stepList: any[] = [
    {
      stepName: 'Basic Details', isComplete: false
    },
    {
      stepName: 'Skills', isComplete: false
    },
    {
      stepName: 'Experience', isComplete: false
    },
  ];

  activeStep: any = this.stepList[0];

  setActiveStep(activeStep: any) {
    this.activeStep = activeStep;
  }

  employeeObj: any = {
    "roleId": 0,
    "userName": "",
    "empCode": "",
    "empId": 0,
    "empName":"",
    "empEmailId": "",
    "empDesignationId": 0,
    "empContactNo": "",
    "empAltContactNo": "",
    "empPersonalEmailId": "",
    "empExpTotalYear": 0,
    "empExpTotalMonth": 0,
    "empCity": "",
    "empState": "",
    "empPinCode": "",
    "empAddress": "",
    "empPerCity": "",
    "empPerState": "",
    "empPerPinCode": "",
    "empPerAddress": "",
    "password": "",
    "erpEmployeeSkills": [],
    "ermEmpExperiences": [],
  }

  addSkills() {
    const skillObj = {
      "empSkillId": 0,
      "empId": 0,
      "skill": "",
      "totalYearExp": 0,
      "lastVersionUsed": "",
    };
    this.employeeObj.erpEmployeeSkills.unshift(skillObj);
  }

  addExpObj() {
    const ExpObj = {
      "empExpId": 0,
      "empId": 0,
      "companyName": "",
      "startDate": "2024-06-19T10:17:21.856Z",
      "endDate": "2024-06-19T10:17:21.856Z",
      "designation": "",
      "projectsWorkedOn": "",
    };
    this.employeeObj.ermEmpExperiences.unshift(ExpObj);
  }

  saveEmployee() {
    // debugger;
    this.http.post("https://freeapi.gerasim.in/api/EmployeeApp/CreateNewEmployee", this.employeeObj).subscribe((res: any) => {
      if (res.result) {
        alert('Employee Created Success')
      } else {
        alert(res.message)
      }
    })
  }

  updateEmployee(){
    this.http.put("https://freeapi.gerasim.in/api/EmployeeApp/UpdateEmployee", this.employeeObj).subscribe((res:any)=>{
      if(res.result){
        alert('Employee Updated Successfully')
      } else{
        alert(res.message)
      }
    })
  }

  loadDesignations() {
    this.http.get("https://freeapi.gerasim.in/api/EmployeeApp/GetAllDesignation").subscribe((res: any) => {
      this.designationList = res.data;
    })
  }

  loadRoles() {
    this.http.get("https://freeapi.gerasim.in/api/EmployeeApp/GetAllRoles").subscribe((res: any) => {
      this.roleList = res.data;
    })
  }

  nextStep() {
    const currentStep = this.stepList.find(m => m.stepName == this.activeStep.stepName);
    currentStep.isComplete = true;
    this.activeStep = this.stepList[1];
    this.stepperCompletionValue = 51;
  }

  nextStep2() {
    const currentStep = this.stepList.find(m => m.stepName == this.activeStep.stepName);
    currentStep.isComplete = true;
    this.activeStep = this.stepList[2];
    this.stepperCompletionValue = 100;
  }

  onlyDigits(event: any) {
    const maskSeperator = new RegExp('^([0-9])', 'g');
    return maskSeperator.test(event.key);
  }

  onedit(id:any){
    this.http.get("https://freeapi.gerasim.in/api/EmployeeApp/GetEmployeeByEmployeeId?id=" + id).subscribe((res: any) => {
      this.employeeObj = res.data;
      this.employeeObj.empId = id; 
      console.log("data", this.employeeObj)
    });
  }

  backButton(){
    this.router.navigate(['./app-report']);
  }

 

}
