import { twMerge } from "tailwind-merge";

type position = "left" | "right";

interface ChatBubbleProps {
  children: React.ReactNode;
  className?: string;
  position: position;
}

const __DEFAULT_ELEMENT__ = "div";

export default function ChatBubble({
  className,
  position,
  children,
}: ChatBubbleProps) {
  const Component = __DEFAULT_ELEMENT__;

  return (
    <Component
      className={`w-full h-auto flex items-center py-2 px-6 drop-shadow-md ${
        position == "left" ? "justify-start" : "justify-end"
      }`}
    >
      <Component
        className={twMerge(
          `w-fit p-3 bg-white flex-col`,
          className,
          position == "left"
            ? "rounded-r-lg rounded-bl-lg"
            : "rounded-l-lg rounded-br-lg"
        )}
      >
        <div className={`text-lg font-bold ${position == "left" ? "text-left" : "text-right"}`}>Sender Name</div>
        <div>{children}</div>
        <div className={`text-xs text-gray-400 ${position == "left" ? "text-left" : "text-right"}`}>16.08 Thursday</div>
      </Component>
    </Component>
  );
}
