import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { LoadSummary } from 'src/state/loading/loading.actions';

@Component({
  selector: 'app-loading-details',
  templateUrl: './loading-details.component.html',
  styleUrls: ['./loading-details.component.css']
})
export class LoadingDetailsComponent implements OnInit {

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadSummary());
  }

}
