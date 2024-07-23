import { UseWs } from "@/utils/ws-connect";
import Button from "../button";
import ChatBubble from "../chat-bubble";
import PaperPlaneIcon from "../icons/paper-plane";
import TextField from "../text-input";
import { useEffect, useRef, useState } from "react";
import { ActionType, ChatPayload } from "@/types/room";
import { chatroomService } from "@/services";
import { Message } from "@/types/chatroom";

interface ChatroomProps {
  id: string;
}

export default function Chatroom({ id }: ChatroomProps) {
  const { isReady, messages, send } = UseWs(
    "ws://localhost:8000/chat?id=" + id
  );
  const [text, setText] = useState<string>("");
  const [historyMessages, setHistoryMessages] = useState<Message[]>([]);
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!text) return console.log("empty text");
    const payload: ChatPayload = {
      action: ActionType.SEND_MESSAGE,
      message: text,
      target: id,
    };
    if (send) {
      send(JSON.stringify(payload));
    }
    setText("");
  };

  const getHistoryMessages = async () => {
    try {
      const response = await chatroomService.getHistoryMessages(id);
      if (response) {
        setHistoryMessages(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (!id) return null;

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    getHistoryMessages();
  }, []);

  return (
    <div className="flex flex-col h-full bg-[#434240] rounded-lg items-center p-6">
      <div className="w-full h-full bg-gray-300 gap-y-5 overflow-scroll">
        {historyMessages.map((message) => {
          return (
            <ChatBubble
              key={message.id}
              position={message.sender == "owner" ? "left" : "right"}
            >
              {message.text}
            </ChatBubble>
          );
        })}
        {messages.map((message) => {
          return (
            <ChatBubble
              key={message.id}
              position={message.sender == "owner" ? "left" : "right"}
            >
              {message.text}
            </ChatBubble>
          );
        })}

        <div ref={messageEndRef} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full h-1/6 flex justify-center items-center"
      >
        <div className="w-full">
          <TextField
            className="bg-white p-6 mt-8"
            size="large"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <Button
          className="w-[76px] p-7 mt-8 ml-4 bg-blue-500 rounded-md flex justify-center items-center"
          size="large"
          type="submit"
        >
          <PaperPlaneIcon fill="#000000" />
        </Button>
      </form>
    </div>
  );
}
