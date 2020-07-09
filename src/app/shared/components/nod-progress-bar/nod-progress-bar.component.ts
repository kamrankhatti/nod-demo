import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nod-progress-bar',
  templateUrl: './nod-progress-bar.component.html',
  styleUrls: ['./nod-progress-bar.component.scss']
})
export class NodProgressBarComponent implements OnInit {
  @Input() progressPercentage: number;

  constructor() {}

  ngOnInit(): void {}
}
