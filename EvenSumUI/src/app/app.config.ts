import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { EvenSumComponent } from './even-sum/even-sum.component';

export const appConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(FormsModule)
  ],
  imports: [
    EvenSumComponent  // ✅ standalone components go here
  ]
};