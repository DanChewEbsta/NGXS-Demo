import { Injectable } from "@angular/core";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { Metric } from "src/state/metric/metric.model";
import { MetricSelectors } from "src/state/metric/metric.selectors";
import { MetricState } from "src/state/metric/metric.state";

@Injectable({ providedIn: 'root'})
export class MetricTileFacade { 
    @Select(MetricState.isLoaded) 
    isLoaded!: Observable<boolean>;

    @Select(MetricState.selectedMetric)
    selectedMetric!: Observable<Metric>;

    @Select(MetricState.metricsIds)
    metricsIds!: Observable<number[]>
    
    @Select(MetricState.tags)
    tags!: Observable<string[]>

    @Select(MetricSelectors.getFilteredMetricIds)
    filteredIds!: Observable<number[]>
}