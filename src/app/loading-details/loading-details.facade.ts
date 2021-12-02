import { Injectable } from "@angular/core";
import { Select, Selector } from "@ngxs/store";
import { Observable } from "rxjs";
import { LoadSummary } from "src/state/loading/loading.actions";
import { LoadingItem, LoadingStateModel } from "src/state/loading/loading.model";
import { LoadingState } from "src/state/loading/loading.state";

@Injectable({ providedIn:'root' })
export class LoadingDetailsFacade {
    @Select(LoadingState.loadingStatus)
    loadingStatus!: Observable<string>;

    @Select(LoadingState.items) 
    items!: Observable<LoadingItem[]>;
}