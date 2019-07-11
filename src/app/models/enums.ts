export class HighlightType {
    static NONE = 'none';
    static DURATION = 'duration';
    static ROWS = 'rows';
    static COST = 'io cost';
}

export enum EstimateDirection {
    over,
    under
}

export class ViewMode {
    static FULL = 'full';
    static COMPACT = 'compact';
    static DOT = 'dot';
}
