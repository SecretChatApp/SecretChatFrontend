export type KeyValueFrom<K extends string | number | symbol, V> = {
    [Key in K]: V;
}

export interface CommonApiResponse<T> {
    message: string;
    data: T;
}