import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nod-char-counter',
  templateUrl: './nod-char-counter.component.html',
  styleUrls: ['./nod-char-counter.component.scss']
})
export class NodCharCounterComponent implements OnInit {
  @Input() limit: number;
  @Input() charCount: string;

  constructor() {}

  ngOnInit(): void {
  }

}
