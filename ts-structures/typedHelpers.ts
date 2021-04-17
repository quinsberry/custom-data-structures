export function pick<T extends object, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
    const ret: any = {}

    keys.forEach((key: K) => {
        if (obj.hasOwnProperty(key)) {
            ret[key] = obj[key]
        }
    })

    return ret
}


export function omit<T extends object, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> {
    const ret: any = {}
    const keySet = new Set<string>(keys)

    Object.keys(obj).forEach((key: string) => {
        if (!keySet.has(key)) {
            ret[key] = obj[key]
        }
    })

    return ret
}
