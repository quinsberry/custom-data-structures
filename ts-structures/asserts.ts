/**
 *   Example:
 *
 *   const thing = ''
 *   isOfType<number>(thing, thing => typeof thing === 'number')
 *
 *   @returns: boolean
 * */
export function isOfType<T>(value: any, predicate: (value: any) => boolean): value is T {
    return predicate(value)
}

/**
 *   Example:
 *
 *   const thing = ''
 *   assertType<number>(thing, thing => typeof thing === 'number');
 *
 *   @returns: void
 * */
export function assertType<T>(value: any, predicate: (value: any) => boolean, message?: string): asserts value is T {
    if (!predicate(value)) {
        throw new Error(message ?? `Invalid value: ${value}`)
    }
}

/**
 *   Example:
 *
 *   const thing = ''
 *   assertNonNull(thing)
 *
 *   @returns: void
 * */
export function assertNonNull<T>(value: T, message?: string): asserts value is NonNullable<T> {
    return assertType<T>(value, value => value != null, message)
}

/**
 * can be used for
 * <pre>
 *   strArr.filter<string>(isNotNull);
 * </pre>
 * where you'd otherwise have to do
 * <pre>
 *   strArr.filter(s: s is string => s !== null);
 * </pre>
 *
 * @returns `value` is defined and not null
 */
export function isNotNull<T>(value: (T | null)): value is NonNullable<T> {
    return value !== null && value !== undefined
}


/**
 *  Example:
 *
 *  throw assertNever(shouldBeNever)
 *
 *  @returns: void
 * */
export const assertUnreachable = (x: never): Error => {
    return new Error(`This code should not be reachable! Did not expect ${JSON.stringify(x, null, 4)}`)
}
