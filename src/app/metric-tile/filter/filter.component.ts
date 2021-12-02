import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ApplyMetricFilter } from 'src/state/metric-filter/metric-filter.actions';
import { MetricTileFacade } from '../metric-tile.facade';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(public readonly facade: MetricTileFacade,
    private readonly store: Store) { }

  ngOnInit(): void {
  }


  onIdSelected(event: any) {
    this.store.dispatch(new ApplyMetricFilter('id', Number(event.target.value)));
  }

  onTagSelected(event: any) {
    this.store.dispatch(new ApplyMetricFilter('tag', event.target.value));
  }
}
