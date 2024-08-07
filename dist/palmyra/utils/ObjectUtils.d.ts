export declare function isObject(item: any): boolean;
export declare function mergeDeep(target: any, ...sources: any[]): any;
export declare const cloneDeep: <T>(source: T) => T;
declare const delayGenerator: (ms: number) => (callback: Function) => void;
declare const delay: (callback: Function) => void;
export { delay, delayGenerator };
