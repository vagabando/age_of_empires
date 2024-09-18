export interface IResponse<T = unknown> {
  data: T;
  success: boolean;
  responseCodes: IResponseCode[];
}
export type Nullable<T> = T | null;
export interface IResponseCode {
  responseCode: number;
  responseKey: Uppercase<string>;
  responseMessage: string;
}

export type IResponseInfo<T = unknown> = Omit<IResponse<T>, 'success'>;
export type IResponseError<T = unknown> = Omit<IResponse<T>, 'success'>;




