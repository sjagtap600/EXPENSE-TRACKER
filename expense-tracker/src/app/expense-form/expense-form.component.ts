import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'expense-form',
  templateUrl: './expense-form.component.html',
  standalone: true,
  imports: [FormsModule]
})
export class ExpenseFormComponent {
  description: string = '';
  amount: number = 0;
  date: Date = new Date();

  @Output() expenseAdded = new EventEmitter<{ description: string, amount: number, date: Date }>();

  get dateFormatted(): string {
    return this.date.toISOString().split('T')[0]; // Convert date to 'yyyy-MM-dd' format
  }

  set dateFormatted(value: string) {
    this.date = new Date(value); // Convert input string back to Date object
  }

  // Method to handle form submission
  onSubmit() {
    const newExpense = {
      description: this.description,
      amount: this.amount,
      date: this.date,
    };

    this.expenseAdded.emit(newExpense);
    this.resetForm(); // Call resetForm after submitting
  }

  // Properly implemented resetForm method
  resetForm() {
    this.description = '';  // Reset description
    this.amount = 0;        // Reset amount
    this.date = new Date();  // Reset date
  }
}
