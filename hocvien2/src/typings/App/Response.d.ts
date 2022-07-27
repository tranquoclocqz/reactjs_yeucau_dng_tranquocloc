export interface IResponse {
  message?: string;
  data?: any;
  status?: 1 | 0 | 403;
  tokenReset?: string;
}
