import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  result = '';
  operand = '';
  currentNumber: string = '';
  expressionExcludeCurrentNumber: string = '';

  public operand$ = new Subject<string>();

  onSelectNumber(num: string) {
    this.operand += num.toString();
    this.operand$.next(this.operand);
  }

  onSelectOperator(op: String) {
    this.operand += ` ${op} `;
    this.operand$.next(this.operand);
  }

  onInputBtn(){
    
  }

  onSelectEqual() {
    this.result = this.expressionExcludeCurrentNumber + this.operand;
    if (this.result.length > 0) {
      this.currentNumber = eval(this.result);
      console.log('currentNumber', this.currentNumber);
      this.operand$.next(this.currentNumber);
      this.operand = this.currentNumber;
    }
  } 

  public returnCount() {
     this.operand = '';
     this.currentNumber = '';
     this.onSelectNumber('');
  }

  constructor() { }

}
