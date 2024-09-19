export interface IResponse<T = unknown> {
  data: T;
  success: boolean;
  responseCodes: IResponseCode[];
}
export type Nullable<T> = T | null;
export type Mutable<T> = {
  -readonly [k in keyof T]: T[k];
};
export interface IResponseCode {
  responseCode: number;
  responseKey: Uppercase<string>;
  responseMessage: string;
}

export type IResponseInfo<T = unknown> = Omit<IResponse<T>, 'success'>;
export type IResponseError<T = unknown> = Omit<IResponse<T>, 'success'>;




