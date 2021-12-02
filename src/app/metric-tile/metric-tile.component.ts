import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FetchMetrics } from 'src/state/metric/metric.actions';
import { MetricTileFacade } from './metric-tile.facade';

@Component({
  selector: 'app-metric-tile',
  templateUrl: './metric-tile.component.html',
  styleUrls: ['./metric-tile.component.css']
})
export class MetricTileComponent implements OnInit {

  constructor(private readonly store: Store,
    public readonly facade: MetricTileFacade) { }

  ngOnInit(): void {
    this.store.dispatch(new FetchMetrics(false));
  }

}


/*
To Show:
  Dynamic Selectors
  Multi-state selectors
  Action Stream
  Combine Selector
*/