export type FilterType = 'id' | 'tag';

export class ApplyMetricFilter {
    static type = '[Metric Filter] Apply';
    constructor(public readonly filterType: FilterType, public readonly filterValue: any) {}
}