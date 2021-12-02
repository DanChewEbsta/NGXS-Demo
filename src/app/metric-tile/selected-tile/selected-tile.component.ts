import { Component, OnInit } from '@angular/core';
import { MetricTileFacade } from '../metric-tile.facade';

@Component({
  selector: 'app-selected-tile',
  templateUrl: './selected-tile.component.html',
  styleUrls: ['./selected-tile.component.css']
})
export class SelectedTileComponent implements OnInit {

  constructor(public readonly facade: MetricTileFacade) { }

  ngOnInit(): void {
  }

}
