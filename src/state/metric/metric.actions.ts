export class FetchMetrics {
    public static type = '[Metric] Fetch';
    constructor(public readonly forceReload = false){}
}

export class SelectTileMetric {
    public static type = '[Metric] Select';
    constructor(public readonly id: number) {}
}