import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SelectTileMetric } from 'src/state/metric/metric.actions';
import { Metric } from 'src/state/metric/metric.model';
import { MetricState } from 'src/state/metric/metric.state';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input()
  tileId!: number;
  
  tile$!: Observable<Metric | undefined>

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.tile$ = this.store.select(MetricState.selectMetric(this.tileId));
  }

  selectTile() {
    this.store.dispatch(new SelectTileMetric(this.tileId));
  }

}

/*
    Shows alternate way of creating observable without using the @Select attribute
    Shows usage of dynamic selector 
 */