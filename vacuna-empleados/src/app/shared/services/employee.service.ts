import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { UtilsService } from '../utils/utils.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  public getEmployee(id: number) {
    const params: HttpParams = UtilsService.buildQueryParams({ id });

    return this.http.get<Employee[]>('http://localhost:3000/employee', {
      params,
    });
  }

  public getEmployeeByDni(dni: number) {
    const params: HttpParams = UtilsService.buildQueryParams({ dni });

    return this.http.get<Employee[]>('http://localhost:3000/employee', {
      params,
    });
  }

  public getAllEmployee() {
    // _embed=vaccine
    const params: HttpParams = new HttpParams().set('_embed', 'vaccine');
    return this.http.get<Employee[]>('http://localhost:3000/employee', {
      params,
    });
  }

  public postEmployee(employee: Employee) {
    return this.http.post<Employee>(
      'http://localhost:3000/employee',
      employee
    );
  }

  public putEmployee(id: number, employee: Employee) {
    return this.http.put<Employee>(
      'http://localhost:3000/employee/' + id,
      employee
    );
  }

  public patchEmployee(id: number, employee: any) {
    console.log(employee);
    return this.http.patch<Employee>(
      'http://localhost:3000/employee/' + id,
      employee
    );
  }

  public deleteEmployee(id: number) {
    return this.http.delete<Employee[]>('http://localhost:3000/employee/' + id);
  }
}
