import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/shared/models/employee.model';
import { Vaccine } from 'src/app/shared/models/vaccine.model';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { VaccineService } from 'src/app/shared/services/vaccine.service';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.css'],
})
export class VaccineComponent implements OnInit {
  vaccineArray: string[] = [
    'Sputnik',
    'AstraZeneca',
    'Pfizer',
    'Jhonson&Jhonson',
  ];
  employeeId: any;
  employee: Employee = {
    id: 0,
    first_name: '',
    last_name: '',
    dni: 0,
    email: '',
    born_date: '',
    address: '',
    phone_number: 0,
    estado: '',
  };

  vaccine: Vaccine = {
    id: 0,
    employeeId: 0,
    dosis: 0,
    type: '',
    date: '',
  };

  vaccineData = new FormGroup({
    type: new FormControl('', Validators.required),
    dosis: new FormControl(0, Validators.required),
    date: new FormControl('', Validators.required),
  });

  constructor(
    private employeeService: EmployeeService,
    private vaccineService: VaccineService
  ) {}

  ngOnInit(): void {
    this.employeeId = sessionStorage.getItem('currentUser');
    this.employeeService
      .getEmployee(this.employeeId)
      .subscribe((res: Employee[]) => {
        this.employee = res[0];
      });
    this.vaccineService
      .getVaccine(this.employeeId)
      .subscribe((res: Vaccine[]) => {
        this.vaccine = res[0];
        if (res.length !== 0) {
          this.vaccineData.get('type')?.setValue(this.vaccine.type);
          this.vaccineData.get('dosis')?.setValue(this.vaccine.dosis);
          this.vaccineData.get('date')?.setValue(this.vaccine.date);
        }
      });
  }

  updateVaccine(): void {
    if (this.vaccine !== undefined) {
      this.vaccineService
        .patchVaccine(this.vaccine.id, this.vaccineData.value)
        .subscribe((res) => alert('Vacunación actualizada'));
    } else {
      this.vaccineService
        .postVaccine({
          ...this.vaccineData.value,
          employeeId: this.employeeId,
        })
        .subscribe((vaccRes) => {
          this.vaccine = vaccRes;
          this.employeeService
            .patchEmployee(this.employeeId, {
              estado: 'Vacunado',
            })
            .subscribe((empRes) => alert('Vacunación registrada'));
        });
    }
  }

  changeVacc(e: any): void {
    const value: string = e.target.value;
    this.vaccineData.get('type')?.setValue(value.substring(3));
  }
}
