import { Dispatch, SetStateAction } from 'react';
declare function setKeyValue<T>(key: string, value: T): void;
declare function useKeyValue<T>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>];
declare function execute<T>(func: string, props: T): void;
type Func<T> = (d: T) => void;
declare function useExecute<T>(key: string, func: Func<T>): Func<T>;
export { useKeyValue, setKeyValue, execute, useExecute };
