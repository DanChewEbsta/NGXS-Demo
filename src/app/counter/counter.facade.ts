import { Injectable } from "@angular/core";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { CountState } from "../../state/count/count.state";

@Injectable({ providedIn: 'root' })
export class CounterFacade { 
    @Select(CountState.getCount)
    getCount!: Observable<number>;

    @Select(CountState.getIncrement)
    getIncrement!: Observable<number>;
}


/*
    Why facade? 
    - NGXS uses attributes to reduce a lot of boiler plate ++
    - But, knock on effect is it can add a direct dependacy on state, so use facade to inject state observables from selects
    
    - Decision made to have facade at component level vs per state slice
*/