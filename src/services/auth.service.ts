import { LoginPayload, LoginResponse, RegisterPayload } from "@/types/auth";
import { BaseHttpService } from "./base.service";
import { CommonApiResponse } from "@/types/common";

export class AuthService extends BaseHttpService {
  constructor() {
    super();
  }

  async login(payload: LoginPayload) {
    const { data: resBody } = await this.httpClient.post<LoginResponse>(
      `/login`,
      payload
    );

    return resBody;
  }

  async register(payload: RegisterPayload) {
    const { data: resBody } = await this.httpClient.post<
      CommonApiResponse<any>
    >(`/register`, payload);

    return resBody;
  }
}
