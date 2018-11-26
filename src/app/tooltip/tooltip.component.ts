import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .custom-tooltip .tooltip-inner {
      background-color: white;
      border: 1px solid deepskyblue;
      color: black;
      border-radius: 0;
    }
    .custom-tooltip .arrow::before {
      border-top-color: deepskyblue;
      color: white;
    }
  `]
})
export class TooltipComponent implements OnInit {
  @Input() clickTooltip: boolean = false;
  @Input() text: string;
  @Input() position: string;

  constructor() {}

  ngOnInit() {
  }

}
