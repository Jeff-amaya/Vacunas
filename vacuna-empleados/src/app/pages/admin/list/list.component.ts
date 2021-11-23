import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Employee } from 'src/app/shared/models/employee.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { VaccineService } from 'src/app/shared/services/vaccine.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  employees: Employee[] = [];
  employeesFiltering: Employee[] = [];

  vaccineArray: string[] = [
    'Sputnik',
    'AstraZeneca',
    'Pfizer',
    'Jhonson&Jhonson',
  ];

  typeVaccineArray: string[] = ['Vacunado', 'No Vacunado'];

  initDate = new FormControl('');
  endDate = new FormControl('');

  constructor(
    private employeeService: EmployeeService,
    private authService: AuthService,
    private vaccineService: VaccineService
  ) {}

  ngOnInit(): void {
	this.loadData()
  }
  
  loadData(): void {
    this.employeeService.getAllEmployee().subscribe((res: Employee[]) => {
      this.employees = res;
      this.employeesFiltering = res;
    });
  }

  changeVaccType(e: any): void {
    const filter = e.target.value;
    this.employeesFiltering = this.employees.filter((emp) => {
      if (emp.vaccine?.length === 1) {
        if (emp.vaccine[0].type === filter) return true;
      }
      return false;
    });
  }

  changeVaccDosis(e: any): void {
    const filter = e.target.value;
    this.employeesFiltering = this.employees.filter(
      (emp) => emp.estado === filter
    );
  }

  changeDate(): void {
    let iDate = new Date(this.initDate.value);
    let eDate = new Date(this.endDate.value);
    this.employeesFiltering = this.employees.filter((emp) => {
      if (emp.vaccine?.length === 1) {
        let date = new Date(emp.vaccine[0].date);
        console.log({
          date,
          iDate,
          eDate,
          'date < iDate': date < iDate,
          'date > eDate': date > eDate,
        });
        if (iDate < date || eDate > date) return true;
      }
      return false;
    });
  }

  clearFiters(): void {
    this.employeesFiltering = this.employees;
  }

  deleteEmployee(employee: Employee): void {
    this.vaccineService.getVaccine(employee.id).subscribe((res) => {
      let id = res[0].id;
      this.vaccineService
        .deleteVaccine(id)
        .subscribe((resVacc) => console.log(resVacc));
    });

    this.authService.getUser(employee.id).subscribe((res) => {
      let id = res[0].id;
      this.authService
        .deleteUser(id)
        .subscribe((resAuth) => console.log(resAuth));
    });
    this.employeeService
      .deleteEmployee(employee.id)
      .subscribe((res) => {
		alert('Empleado eliminado satisfactoriamente')
		this.loadData()
	  });
  }
}
