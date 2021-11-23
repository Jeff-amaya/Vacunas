import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { UtilsService } from '../utils/utils.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public getUser(employeeId: number) {
    const params: HttpParams = UtilsService.buildQueryParams({ employeeId });

    return this.http.get<User[]>('http://localhost:3000/user/' + employeeId);
  }

  public login(user: User) {
    const params: HttpParams = UtilsService.buildQueryParams(user);

    return this.http.get<User[]>('http://localhost:3000/user', {
      params,
    });
  }

  public createUser(user: User) {
    const params: HttpParams = UtilsService.buildQueryParams(user);

    return this.http.post<User[]>('http://localhost:3000/user', user);
  }

  public deleteUser(id: any) {
    return this.http.delete('http://localhost:3000/user/' + id);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred: ', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }

    return throwError('Something bad happened; please try again later.');
  }
}
