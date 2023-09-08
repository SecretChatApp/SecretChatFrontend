import { UserWs } from "@/utils/ws-connect";
import Button from "../button";
import ChatBubble from "../chat-bubble";
import PaperPlaneIcon from "../icons/paper-plane";
import TextField from "../text-input";
import { useState } from "react";
import { ActionType, ChatPayload } from "@/types/room";

interface ChatroomProps {
  id: string;
}

export default function Chatroom({ id }: ChatroomProps) {
  const { isReady, messages, send } = UserWs(
    "ws://localhost:8000/chat?id=" + id
  );
  const [text, setText] = useState<string>("");
  const [historyMessages, setHistoryMessages] = useState<any[]>([]);

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

  if (!id) return null;

  return (
    <div className="flex flex-col h-full bg-[#434240] rounded-lg items-center p-6">
      <div className="w-full h-full bg-gray-300 gap-y-5 overflow-scroll">
        <ChatBubble position="right">
          right Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          vel.
        </ChatBubble>
        <ChatBubble position="left">
          left Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Suscipit, itaque sapiente! Pariatur sed distinctio reprehenderit natus
          impedit ab quibusdam quaerat.
        </ChatBubble>
        <ChatBubble position="left">
          left Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Suscipit, itaque sapiente! Pariatur sed distinctio reprehenderit natus
          impedit ab quibusdam quaerat.
        </ChatBubble>
        <ChatBubble position="left">
          left Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Suscipit, itaque sapiente! Pariatur sed distinctio reprehenderit natus
          impedit ab quibusdam quaerat.
        </ChatBubble>
        <ChatBubble position="left">
          left Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Suscipit, itaque sapiente! Pariatur sed distinctio reprehenderit natus
          impedit ab quibusdam quaerat.
        </ChatBubble>
        <ChatBubble position="left">
          left Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Suscipit, itaque sapiente! Pariatur sed distinctio reprehenderit natus
          impedit ab quibusdam quaerat.
        </ChatBubble>
        <ChatBubble position="left">
          left Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Suscipit, itaque sapiente! Pariatur sed distinctio reprehenderit natus
          impedit ab quibusdam quaerat.
        </ChatBubble>
        <ChatBubble position="left">
          left Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Suscipit, itaque sapiente! Pariatur sed distinctio reprehenderit natus
          impedit ab quibusdam quaerat.
        </ChatBubble>
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
