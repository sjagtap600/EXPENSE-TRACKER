import { Component } from '@angular/core';
import { ExpenseSummaryComponent } from './expense-summary/expense-summary.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ExpenseSummaryComponent,
    ExpenseFormComponent,
    ExpenseListComponent
  ]
})
export class AppComponent {
  expenseData: { description: string, amount: number, date: Date }[] = [];

  // Method to handle the new expense from ExpenseFormComponent
  onExpenseAdded(newExpense: { description: string, amount: number, date: Date }) {
    console.log('Expense added:', newExpense); // Debug log
    this.expenseData = [...this.expenseData, newExpense]; // Append new expense to the list
  }
}
