import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer';
import { Observable, catchError, throwError } from 'rxjs';
import { Customer } from '../model/customer.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class CustomersComponent implements OnInit {
  customers!: Observable<Array<Customer>>;
  errorMessage!: string;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers().pipe(
      catchError((err) => {
        this.errorMessage = err.message;
        return throwError(() => err);
      }),
    );
  }
}
