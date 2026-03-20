// src/common/utils/map.util.ts

type Constructor<T> = new (...args: any[]) => T;

export function mapTo<T extends object>(
    target: Constructor<T>,
    source: object
): Partial<T> {
    const instance = new target();
    const targetKeys = Object.keys(instance) as (keyof T)[];

    return targetKeys.reduce((acc, key) => {
        if (key in source) {
            acc[key] = (source as any)[key];
        }
        return acc;
    }, {} as Partial<T>);
}