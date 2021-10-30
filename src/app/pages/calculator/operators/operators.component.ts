import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {
  
  
  constructor(private readonly calculatorService: CalculatorService) {}

  ngOnInit() {}
  public InitClear(): void {
    this.calculatorService.returnCount();
    console.log('clear');
  }

  public InitPlus(): void {}

  public InitSum(): void {
    this.calculatorService.onSelectEqual();
  }

  public Plus(){
    this.calculatorService.onSelectOperator('+');
  }

  public Minus(){
    this.calculatorService.onSelectOperator('-');
  }

  public umn(){
    this.calculatorService.onSelectOperator('*');
  }

  public del(){
    this.calculatorService.onSelectOperator('/');
  }
}
