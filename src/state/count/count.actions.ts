export class IncrementCount {
    static readonly type = '[Count] Increment';
    constructor() {}
}

export class DecreaseCount {
    static readonly type = '[Count] Decrease';
    constructor() {}
}

export class ChangeIncrementCount {
    static readonly type = '[Count] Update Increment Number';
    constructor (public readonly by: number) {}
}

/*
    - static type is unique to action 
    - Good practise to keep actions immutable 
        - n.b. thing to check when in dev mode ngxs might tell you off if its not
*/