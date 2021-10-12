import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from './calculator.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ResultComponent } from './result/result.component';
import { OperatorsComponent } from './operators/operators.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    FormsModule
  ],
  declarations: [CalculatorComponent, ButtonsComponent, ResultComponent, OperatorsComponent]
})
export class CalculatorModule { }
