export interface LoadingStateModel {
    [id: number]: LoadingItem,
    loading: boolean
}

export interface LoadingItem { 
    id: number,
    basic: string, 
    detail?: string, 
    loading?: boolean 
}