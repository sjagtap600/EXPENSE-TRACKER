// expense-summary.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule if needed

@Component({
  selector: 'expense-summary',
  templateUrl: './expense-summary.component.html',
  standalone: true, // Mark the component as standalone
  imports: [CommonModule] // Include CommonModule to use common directives and pipes
})
export class ExpenseSummaryComponent {
  // Your component logic
}
