import { Injectable } from '@angular/core';
import { Expense } from './expense.model';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private expenses: Expense[] = [];

  getExpenses(): Expense[] {
    return this.expenses;
  }

  addExpense(expense: Expense) {
    this.expenses.push(expense);
  }

  deleteExpense(id: number) {
    this.expenses = this.expenses.filter(expense => expense.id !== id);
  }
}
