import { Component, OnInit } from '@angular/core';
import { LoadingDetailsFacade } from '../loading-details.facade';

@Component({
  selector: 'app-grid-data',
  templateUrl: './grid-data.component.html',
  styleUrls: ['./grid-data.component.css']
})
export class GridDataComponent implements OnInit {

  constructor(public readonly facade: LoadingDetailsFacade) { }

  ngOnInit(): void {
  }

}
