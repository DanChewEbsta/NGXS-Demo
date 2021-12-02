import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, Actions, Selector, State, StateContext } from "@ngxs/store";
import { delay, tap } from "rxjs/operators";
import { LoadDetail, LoadSummary } from "./loading.actions";
import { LoadingItem, LoadingStateModel } from "./loading.model";

@State<LoadingStateModel>({
    name: 'loading',
    defaults: {
        loading: false
    }
})
@Injectable()
export class LoadingState { 

    constructor(private readonly httpClient: HttpClient) {}

    @Selector([LoadingState]) static getState(state: LoadingStateModel) {
        return state;
    } 

    @Selector([LoadingState]) static loadingStatus(state: LoadingStateModel) {
        if (state.loading) {
            return 'Summary Data';
        } 

        for(let key in state) {
            const item = state[key];
            if (item.loading) {
                return 'Detail Data';
            }
        }

        return '';
    }

    @Selector([LoadingState]) static items(state: LoadingStateModel) {
        var result: LoadingItem[] = [];
        for(let item in state) {
            result.push(state[item])
        }
        return result;
    }

    @Action(LoadSummary) loadSummary(ctx: StateContext<LoadingStateModel>) {
        ctx.patchState({
            loading: true
        });

        return this.httpClient
            .get<{ response: {id: number, basic: string }[] }>('/assets/mock-list-request.json')
            .pipe(
                delay(3000),
                tap(i => {
                    ctx.patchState({
                        loading: false                      
                    });
              
                    for(let item of i.response) {
                        ctx.patchState({
                            [item.id]: { basic: item.basic, id: item.id }
                        });
                        ctx.dispatch(new LoadDetail(item.id));
                    }
                })
            );
    }

    @Action(LoadDetail) loadDetail(ctx: StateContext<LoadingStateModel>, action: LoadDetail) {
        var state = ctx.getState();
        var item = state[action.id];
        
        ctx.patchState({
            [action.id]: {
                ...item,
                loading: true
            }
        });

        return this.httpClient
            .get<{ detail: { id:number, data: string } }>(`/assets/mock-detail-request-${action.id}.json`)
            .pipe(
                delay(randomDelayTime()),
                tap(i => {
                    ctx.patchState({
                        [i.detail.id]: {
                            ...item,
                            detail: i.detail.data,
                            loading: false
                        }
                    });

                    
                })
            );
    }
}

const randomDelayTime = () => (Math.random() * 10000) + 2000;