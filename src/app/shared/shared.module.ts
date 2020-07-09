import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';

// components
import {
  NodButtonComponent,
  NodDatepickerComponent,
  NodCharCounterComponent
} from "./components";

// directives
import { TooltipDirective } from '../shared/directives';

@NgModule({
  declarations: [
    TooltipDirective,
    NodButtonComponent,
    NodDatepickerComponent,
    NodCharCounterComponent,
  ],
  imports: [CommonModule],
  providers: [],
  exports: [
    TooltipDirective,
    NodButtonComponent,
    NodDatepickerComponent,
    NodCharCounterComponent
  ],
  bootstrap: []
})
export class SharedModule {}
