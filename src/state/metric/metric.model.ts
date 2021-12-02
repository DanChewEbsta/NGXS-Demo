export interface MetricStateModel {
    metrics: Metric[],
    loaded: boolean,
    loading: boolean,
    selectedTile?: number
}

export interface Metric { 
    id: number,
    name: string,
    value: string | number,
    tags: string[]
}