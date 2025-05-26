import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-even-sum',
  templateUrl: './even-sum.component.html',
  imports: [CommonModule,FormsModule]
})
export class EvenSumComponent {
  inputNumbers = '';
  result: number | null = null;

  constructor(private http: HttpClient) {}

  calculateSum(): void {
    const numbers = this.inputNumbers
      .split(',')
      .map(n => parseInt(n.trim(), 10))
      .filter(n => !isNaN(n));

  this.http.post<{ sum: number }>('https://localhost:7001/api/EvenNumberSum/sum', numbers)
      .subscribe({
        next: response => this.result = response.sum,
        error: err => alert('Error: ' + err.message)
      });
  }
}

