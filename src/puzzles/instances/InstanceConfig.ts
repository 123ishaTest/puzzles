export interface TileClue {
    x: number;
    y: number;
    value: any;
}


export interface InstanceConfig {
    width: number;
    height: number;
    tileClues?: TileClue[];
}
