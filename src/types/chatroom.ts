export interface CreateChatroomPayload {
  title: string;
  subject: string;
}

export interface ChatroomItem {
  id: string;
  title: string;
  subject: string;
}

export interface Message {
  id: string;
  text: string;
  sender: string;
  created_at: Date;
}
