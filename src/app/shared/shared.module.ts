import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';

// components
import {
  NodButtonComponent,
  NodDatepickerComponent,
  NodCharCounterComponent,
  NodProgressBarComponent
} from "./components";

// directives
import { TooltipDirective } from '../shared/directives';

@NgModule({
  declarations: [
    TooltipDirective,
    NodButtonComponent,
    NodDatepickerComponent,
    NodCharCounterComponent,
    NodProgressBarComponent,
  ],
  imports: [CommonModule],
  providers: [],
  exports: [
    TooltipDirective,
    NodButtonComponent,
    NodDatepickerComponent,
    NodCharCounterComponent,
    NodProgressBarComponent
  ],
  bootstrap: []
})
export class SharedModule {}
