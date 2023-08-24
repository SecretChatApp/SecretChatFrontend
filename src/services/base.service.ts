import axios, { AxiosInstance } from "axios";
import { getCookie } from "cookies-next";

export interface ICommonResponse<T> {
  message: string;
  data: T;
}

export abstract class BaseHttpService {
  readonly httpClient: AxiosInstance;
  readonly baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  constructor() {
    const accessToken = getCookie("access_token") as string;
    this.httpClient = axios.create({
      baseURL: this.baseUrl,
      headers: {        
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
}
