import { Selector } from "@ngxs/store";
import { MetricFilterStateModel } from "../metric-filter/metric-filter.model";
import { MetricFilterState } from "../metric-filter/metric-filter.state";
import { MetricStateModel } from "./metric.model";
import { MetricState } from "./metric.state";

export class MetricSelectors { 
    @Selector([MetricState, MetricFilterState.getState]) 
    static getFilteredMetricIds(metricState: MetricStateModel, filter: MetricFilterStateModel): number[] {
        if(!filter.id && !filter.tag) {
            return metricState.metrics.map(i => i.id);
        }

        return metricState.metrics
            .filter(i => (!filter.id || i.id === filter.id) && (!filter.tag || filter.tag.length == 0 || i.tags.find(t => t === filter.tag) ))
            .map(i => i.id);
    }
}

/* 
    n.b. Selectors will only recalc themselves when one of the values they are listening to emits a change
         so it is advantagous take the smallest slice possible when joining selectors

         Selectors will only emit if the recalc'd value is different to the previous one which reduces the 
         number of redraws that need to happen
*/