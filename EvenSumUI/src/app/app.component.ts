import { Component } from '@angular/core';
import { EvenSumComponent } from './even-sum/even-sum.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EvenSumComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}