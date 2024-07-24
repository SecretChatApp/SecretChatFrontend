import { Message } from "@/types/chatroom";
import { twMerge } from "tailwind-merge";

interface ChatBubbleProps {
  className?: string;
  message: Message;
}

const __DEFAULT_ELEMENT__ = "div";

export default function ChatBubble({ className, message }: ChatBubbleProps) {
  const Component = __DEFAULT_ELEMENT__;

  return (
    <Component
      className={`w-full h-auto flex items-center py-2 px-6 drop-shadow-md ${
        message.sender == "owner" ? "justify-start" : "justify-end"
      }`}
    >
      <Component
        className={twMerge(
          `w-fit p-3 bg-white flex-col`,
          className,
          message.sender == "owner"
            ? "rounded-r-lg rounded-bl-lg"
            : "rounded-l-lg rounded-br-lg"
        )}
      >
        <div className={`text-lg font-bold text-left`}>
          {message.sender == "owner" ? "Owner" : "Client"}
        </div>
        <div>{message.text}</div>
        <div
          className={`text-xs text-gray-400 ${
            message.sender == "owner" ? "text-left" : "text-right"
          }`}
        >
          {new Date().toLocaleString()}
        </div>
      </Component>
    </Component>
  );
}
