import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { patch } from "@ngxs/store/operators";
import { DecreaseCount, IncrementCount, ChangeIncrementCount } from "./count.actions";
import { CountStateModel } from "./count.model";

@State<CountStateModel>({
    name: 'count',
    defaults: {
        currentValue: 0,
        increment: 1
    }
})
@Injectable()
export class CountState {
    @Selector([CountState]) static getState(state: CountStateModel) {
        return state;
    }
    
    @Selector([CountState]) static getCount(state: CountStateModel) {
        return state.currentValue;
    }

    @Selector([CountState.getState]) static getIncrement(state: CountStateModel) {
        return state.increment;
    }
    
    @Action(IncrementCount) increment(context: StateContext<CountStateModel>) {
        var currentState = context.getState();
        context.patchState({
            currentValue: currentState.currentValue + currentState.increment
        });
    }

    @Action(DecreaseCount) decrease(context: StateContext<CountStateModel>) {
        var currentState = context.getState();
        context.setState(patch({
            currentValue: currentState.currentValue -  currentState.increment
        }));
    }

    @Action(ChangeIncrementCount) change(context: StateContext<CountStateModel>, action: ChangeIncrementCount) {
        context.patchState({
            increment: action.by
        });
    }
}
/*
    Notes:
        - Selector retrieves data from state as immutable objects
            - Because static & pure v. easy to test
        - Action increment/decrease example with no params and reading value stored in state
        - change increment shows 
        - dont forget to show dev tools
        - Note selectors don't have to be stored within state class, e.g. they could be in there own file or more complicated ones can be pulled out
*/