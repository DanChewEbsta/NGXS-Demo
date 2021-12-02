import { Injectable } from "@angular/core";
import { Action, Select, Selector, State, StateContext } from "@ngxs/store";
import { ApplyMetricFilter } from "./metric-filter.actions";
import { MetricFilterStateModel } from "./metric-filter.model";

@State<MetricFilterStateModel>({
    name: 'metricFilter',
    defaults: {
    }
})
@Injectable()
export class MetricFilterState { 

    @Selector([MetricFilterState]) static getState(state: MetricFilterStateModel) {
        return state;
    }

    @Action([ApplyMetricFilter]) applyFilter(ctx: StateContext<MetricFilterStateModel>, action: ApplyMetricFilter) {
        ctx.patchState({
            [action.filterType]: action.filterValue
        });
    }
}