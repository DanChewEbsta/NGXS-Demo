import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ChangeIncrementCount } from 'src/state/count/count.actions';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {

  incrementBy: string = "1";

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
  }

  updateIncrement(event: Event) {
    var target = event.target as any;
    this.store.dispatch(new ChangeIncrementCount(Number(target.value)))
  }
}
