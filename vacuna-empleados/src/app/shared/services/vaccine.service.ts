import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vaccine } from '../models/vaccine.model';
import { UtilsService } from '../utils/utils.service';

@Injectable({
  providedIn: 'root',
})
export class VaccineService {
  constructor(private http: HttpClient) {}

  public getVaccine(employeeId: number) {
    const params: HttpParams = UtilsService.buildQueryParams({
      employeeId,
    });

    return this.http.get<Vaccine[]>('http://localhost:3000/vaccine', {
      params,
    });
  }

  public getAllVaccine() {
    return this.http.get<Vaccine[]>('http://localhost:3000/vaccine');
  }

  public postVaccine(vaccine: Vaccine) {
    return this.http.post<Vaccine>('http://localhost:3000/vaccine', vaccine);
  }

  public patchVaccine(id: any, vaccine: Vaccine) {
    return this.http.patch<Vaccine>(
      'http://localhost:3000/vaccine/' + id,
      vaccine
    );
  }

  public deleteVaccine(id: any) {
    return this.http.delete<Vaccine[]>('http://localhost:3000/vaccine/' + id);
  }
}
