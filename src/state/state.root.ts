import { CountState } from "./count/count.state";
import { LoadingState } from "./loading/loading.state";
import { MetricFilterState } from "./metric-filter/metric-filter.state";
import { MetricState } from "./metric/metric.state";

export const ALL_STATES = [CountState, MetricState, MetricFilterState, LoadingState];