import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  currentUser: number = 0;
  users: User[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout(): void {
    sessionStorage.removeItem('currentItem');
    this.router.navigate(['/']);
  }
}
