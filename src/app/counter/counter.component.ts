import { Component, OnInit } from '@angular/core';
import { CounterFacade } from './counter.facade';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(public readonly facade: CounterFacade) { }

  ngOnInit(): void {
  }

}

/* 
To Show:

NGXS Basics
- Actions
- Selectors
- Count State

*/
