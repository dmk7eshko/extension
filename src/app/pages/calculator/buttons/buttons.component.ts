import { KeyedRead } from '@angular/compiler';
import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  @HostBinding('class.calculator-buttons') readonly baseCss: boolean = true;
  
  val = 0;
   
  constructor(private readonly calculatorService: CalculatorService) { 
    
  }

  public PressButton(val): void {
    this.calculatorService.onSelectNumber(val);
  }

// сделать метод lifesicle onPropsUpdate, перебираю стейт 

  ngOnInit(): void {}
 
}
