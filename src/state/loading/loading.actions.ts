export class LoadSummary {
    static type = "[Loading] - Load Summary";
    constructor() {}
}

export class LoadDetail {
    static type = "[Loading] - Load Detail";
    constructor(public readonly id: number) {}
}