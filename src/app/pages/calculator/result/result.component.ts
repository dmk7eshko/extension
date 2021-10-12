import { Component, HostBinding, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit  {
  @HostBinding('class.calculator-result') readonly baseCss: boolean = true;
  result: string = '';

  constructor(private readonly calculatorService: CalculatorService) {}

  ngOnInit() { 
    this.calculatorService.operand$.subscribe((number) => {
      this.result = String(number);
      });
  }
 
}


