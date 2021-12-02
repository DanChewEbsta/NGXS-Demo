import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, createSelector, Selector, State, StateContext } from "@ngxs/store";
import { FetchMetrics, SelectTileMetric } from "./metric.actions";
import { MetricStateModel } from "./metric.model";
import { catchError, tap } from 'rxjs/operators';
import { flatten } from "@angular/compiler";

@State<MetricStateModel>({
    name: 'metric',
    defaults: {
        metrics: [],
        loaded: false,
        loading: false
    }
})
@Injectable()
export class MetricState { 

    constructor(private readonly httpClient: HttpClient) {        
    }
    
    static selectMetric(id: number) {
        return createSelector([MetricState], (state: MetricStateModel) => {
            return state.metrics.find(i => i.id == id);
        });
    }

    @Selector([MetricState]) static metricsIds(state: MetricStateModel) {
        return state.metrics.map(i => i.id);
    } 

    @Selector([MetricState]) static tags(state: MetricStateModel) {
        return [...new Set(flatten(state.metrics.map(i => i.tags)))];
    }

    @Selector([MetricState]) static isLoaded(state: MetricStateModel) {
        return state.loaded;
    }

    @Selector([MetricState]) static selectedMetric(state: MetricStateModel) {
        if(!state.selectedTile) { return undefined; }
        
        return state.metrics.find(i => i.id == state.selectedTile);
    }

    @Action(SelectTileMetric) select(context: StateContext<MetricStateModel>, action: SelectTileMetric) {
        context.patchState({
            selectedTile: action.id
        });
    }

    @Action(FetchMetrics) fetch(context: StateContext<MetricStateModel>, action: FetchMetrics) {
        var state = context.getState();
        if(state.loading) { return; }
        if(!!state.loaded && !action.forceReload) { return; }
        
        context.patchState({ loading:true });
        
        return this.httpClient.get('/assets/mock-request.json')
            .pipe(
                tap((response: any) => {
                    context.patchState({
                        metrics: response.metric,
                        loaded: true,
                        loading: false
                    });
                catchError((err, caught) => {
                        console.log(err);
                        context.patchState({
                            loaded:false,
                            loading: false
                        });
                        return caught;
                    })
                })
            )

    }
}
/* 
    - Shows http request with loading states
        - returning an observable will be subscribed to, the action will run until the observable completes so pipes can be used to extract data
            - ++ with this events can also be subscribed to on actions dispatching/completing/erroring
        - actions returning promises/observables will wait for compelete to complete, void or another object will complete on return.
    - Dynamic selector 
        - allowing reuse when picking up values
    - Combine selectors
*/