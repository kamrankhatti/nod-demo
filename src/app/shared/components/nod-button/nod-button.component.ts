import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface INodButtonProps {
  text: string;
  class: string;
  disabled?: boolean;
}

@Component({
  selector: 'nod-button',
  templateUrl: './nod-button.component.html',
  styleUrls: ['./nod-button.component.scss']
})
export class NodButtonComponent implements OnInit {
  @Input() props: INodButtonProps;

  @Output() buttonClick: EventEmitter<Event> = new EventEmitter();

  constructor() {}

  disableButton() {
    this.props = {
      ...this.props,
      disabled: true
    };
  }

  onClick(event: Event) {
    // disable button after submit
    this.disableButton();

    // trigger click event
    this.buttonClick.emit(event);
  }

  ngOnInit(): void {}
}
