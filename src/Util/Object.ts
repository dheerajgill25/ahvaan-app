import { assign, fromPairs, isArray, isEqual, isObject } from 'lodash';

export function keysOf<T extends Record<string, any>>(obj: T): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[];
}

export function entriesOf<T extends Record<string, any>>(
    obj: T,
): [keyof T, T[keyof T]][] {
    return Object.entries(obj) as unknown as [keyof T, T[keyof T]][];
}

export function assignValues<T>(to: T, values: Partial<T>): T {
    return assign(to, values);
}

export function replaceDeep(obj: object, needle: any, replacement: any): any {
    function replace(value: any) {
        if (isEqual(value, needle)) {
            return replacement;
        }
        if (isArray(value)) {
            return value.map(v => replaceDeep(v, needle, replacement));
        }
        if (isObject(value)) {
            return fromPairs(
                entriesOf(value).map(([k, v]) => [
                    k,
                    replaceDeep(v, needle, replacement),
                ]),
            );
        }
        return value;
    }
    return replace(obj);
}
