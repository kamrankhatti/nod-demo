import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import flatpickr from "flatpickr";

@Component({
  selector: 'nod-datepicker',
  templateUrl: './nod-datepicker.component.html',
  styleUrls: ['./nod-datepicker.component.scss']
})
export class NodDatepickerComponent implements OnInit {
  @Input() placeholder: string;
  @Output() dateChange: EventEmitter<any> = new EventEmitter();

  // flatpickr (light weight datepicker) instance
  picker: flatpickr.Instance;

  constructor() {}

  onChange(_, dateStr) {
    // emit date change
    this.dateChange.emit(dateStr ? dateStr : null)
  }

  ngOnInit(): void {
    // set default options
    const options = {
      closeOnSelect: true,
      onChange: this.onChange.bind(this)
    }
    // initialize flatpicker isntance
    this.picker = <flatpickr.Instance>flatpickr('#datePicker', options);
  }
}
