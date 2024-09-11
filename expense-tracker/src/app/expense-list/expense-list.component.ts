import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'expense-list',
  templateUrl: './expense-list.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class ExpenseListComponent {
  // List of expenses passed as input
  @Input() expenses: { description: string, amount: number, date: Date }[] = [];

  // This method will be used to add an expense to the list
  addExpense(expenseData: { description: string, amount: number, date: Date }) {
    console.log('Adding expense:', expenseData); // Debug log
    this.expenses = [...this.expenses, expenseData]; // Add the new expense to the existing list
  }

  // Optional lifecycle hook to log changes in the input
  ngOnChanges() {
    console.log('Expenses updated:', this.expenses);
  }
}
