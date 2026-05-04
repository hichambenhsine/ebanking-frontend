import { Customer } from './customer.model';

export interface AccountDetails {
  accountId: string;
  balance: number;
  currentPage: number;
  totalPages: number;
  pageSize: number;
  accountOperationDTOS: AccountOperation[];
}

export interface AccountOperation {
  id: number;
  operationDate: Date;
  amount: number;
  type: string; // DEBIT or CREDIT
  description: string;
}

export interface BankAccount {
  type: string; // "CurrentAccount" ou "SavingAccount"
  id: string;
  balance: number;
  createdAt: Date;
  status: string;
  customerDTO: Customer;
  overDraft?: number; // if account is CurrentAccount
  interestRate?: number; // if account is SavingAccount
}
