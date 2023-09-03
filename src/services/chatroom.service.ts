import { ChatroomItem, CreateChatroomPayload } from "@/types/chatroom";
import { BaseHttpService } from "./base.service";
import { CommonApiResponse } from "@/types/common";

export class ChatroomService extends BaseHttpService {
  constructor() {
    super();
  }

  async postCreateRoom(payload: CreateChatroomPayload) {
    const { data: resBody } = await this.httpClient.post<
      CommonApiResponse<any>
    >(`/api/chatroom`, payload);

    return resBody;
  }

  async getChatrooms() {
    const { data: resBody } = await this.httpClient.get<
      CommonApiResponse<ChatroomItem[]>
    >(`/api/chatrooms`);

    return resBody.data;
  }

  async getChatroomByRoomId(id: string) {
    const { data: resBody } = await this.httpClient.get<
      CommonApiResponse<ChatroomItem>
    >(`/api/chatroom/${id}`);

    return resBody.data;
  }

  async updateChatroom(id: string, payload: CreateChatroomPayload) {
    const { data: resBody } = await this.httpClient.put<
      CommonApiResponse<ChatroomItem>
    >(`/api/edit/${id}`, payload);

    return resBody;
  }

  async deleteChatroom(id: string) {
    const { data: resBody } = await this.httpClient.delete<
      CommonApiResponse<ChatroomItem>
    >(`/api/delete/${id}`);

    return resBody;
  }
}
