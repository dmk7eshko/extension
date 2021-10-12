import { Component, OnInit, HostBinding } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  @HostBinding('class.calculator') readonly baseCss: boolean = true;

  constructor(private readonly calculatorService: CalculatorService) { 
    // console.log(calculatorService.result)
    // calculatorService.result = 3
  }
 

  ngOnInit() {
  }

}
