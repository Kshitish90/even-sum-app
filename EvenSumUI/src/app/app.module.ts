import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EvenSumComponent } from './even-sum/even-sum.component'; // ✅ IMPORT THIS

@NgModule({
  declarations: [
    AppComponent,
    EvenSumComponent // ✅ REGISTER THIS HERE
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }