import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { DecreaseCount } from 'src/state/count/count.actions';

@Component({
  selector: 'app-decrement',
  templateUrl: './decrement.component.html',
  styleUrls: ['./decrement.component.css']
})
export class DecrementComponent implements OnInit {

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
  }

  decreaseValue(): void {
    this.store.dispatch(new DecreaseCount());
  }

}
