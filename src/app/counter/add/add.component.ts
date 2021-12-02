import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { IncrementCount } from 'src/state/count/count.actions';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
  }

  addValue() : void {
    this.store.dispatch(new IncrementCount())
  }
}

/*
  N.B - Difference with dependancy on Store vs Selector is as store is DI'd in it can be mocked just like any other service. 
*/