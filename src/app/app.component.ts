import { Component } from '@angular/core';
import { config } from '../config/config';

const URL = config.url;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
  purchasePrice: number | null = null; 
  monthlyRent: number | null = null;
  annualRentalFee: number | null = null;

  roiY1: number = 0;
  roiY2: number = 0;
  roiY3: number = 0;
  overallROI: number = 0;

  constructor() {}

  handleSubmit() {
    this.makeFetchRequest();
    console.log('Form submitted!', this.purchasePrice, this.monthlyRent, this.annualRentalFee);
  }

  private makeFetchRequest() {
    const isValidInput = this.validateNumericInput();

    if (!isValidInput) {
      console.error('Invalid input. Please enter valid numeric values.');
      alert('Invalid input. Please enter valid numeric values.');
      return;
    }

    const data = {
      purchasePrice: this.purchasePrice,
      monthlyRent: this.monthlyRent,
      annualRentalFee: this.annualRentalFee
    };

    fetch(`${URL}/calculate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        // console.log('Calculation result:', result);
        this.roiY1 = result.roiY1;
        this.roiY2 = result.roiY2;
        this.roiY3 = result.roiY3;
        this.overallROI = result.overallROI;
      })
      .catch(error => {
        console.error('Error during fetch:', error);
      });
  }

  private validateNumericInput(): boolean {
    const numericRegex = /^[1-9]\d*(\.\d{1,2})?$/;
  
    if (
      !numericRegex.test(String(this.purchasePrice)) ||
      !numericRegex.test(String(this.monthlyRent)) ||
      !numericRegex.test(String(this.annualRentalFee))
    ) {
      return false;
    }
  
    return true;
  }
}

