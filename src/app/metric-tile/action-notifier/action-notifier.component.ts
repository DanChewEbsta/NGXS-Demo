import { Component, OnDestroy, OnInit } from '@angular/core';
import { Actions, ofActionCompleted } from '@ngxs/store';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApplyMetricFilter } from 'src/state/metric-filter/metric-filter.actions';

@Component({
  selector: 'app-action-notifier',
  templateUrl: './action-notifier.component.html',
  styleUrls: ['./action-notifier.component.css']
})
export class ActionNotifierComponent implements OnInit, OnDestroy {

  public showHide = new BehaviorSubject<boolean>(false);
  private ngDestroy = new Subject();

  constructor(private readonly actions: Actions) { }

  ngOnDestroy(): void {
    this.ngDestroy.next();
    this.ngDestroy.complete();
  }

  ngOnInit(): void {
    this.actions
      .pipe(
        ofActionCompleted(ApplyMetricFilter),
        takeUntil(this.ngDestroy)
        )
      .subscribe(i => {
        this.showHide.next(true);
        setTimeout(() => this.showHide.next(false), 3500);
      });
  }

}
/** 
 * Action streams allows subscriptions to dispatched, completed and errors actions.
 * - if action has multiple handlers complete will fire for all of them
 * - dispatched can be picked up from the action stream even if it has no handlers (e.g. if you want to fire events between components)
 */
