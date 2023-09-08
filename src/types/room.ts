export enum ActionType {
  SEND_MESSAGE = "send-message",
}

export interface ChatPayload {
  action: ActionType;
  message: string;
  target: string;
}
