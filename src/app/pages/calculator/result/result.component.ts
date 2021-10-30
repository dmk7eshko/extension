import { Component, EventEmitter, HostBinding, HostListener, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit  {
  @HostBinding('class.calculator-result') readonly baseCss: boolean = true;
  result: string = '';
  keypressed: string;
  keypressed2: number;

  constructor(private readonly calculatorService: CalculatorService) {}

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.keypressed = event.key;
    this.keypressed2 = event.keyCode;
    console.log('keypressed', this.keypressed, this.keypressed2);
  }

  ngOnInit() { 
    this.calculatorService.operand$.subscribe((number) => {
      this.result = String(number);
      });
  }

}


