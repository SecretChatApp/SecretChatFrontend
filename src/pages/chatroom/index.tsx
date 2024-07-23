import Chatroom from "@/components/chatroom/chatroom";
import { useRouter } from "next/router";
import ChatroomLayout from "@/components/chatroom/chatroom-layout";

export default function ChatroomPage() {
  const router = useRouter();
  const id = router.query.id;

  const handleNavigate = (value: string) => {
    router.push(`/chatroom?id=${value}`);
  };

  return (
    <div>
      <ChatroomLayout onSelect={(value) => handleNavigate(value)}>
        <div className="h-full w-full bg-[#6B7BD3] flex justify-center items-center">
          <div className="h-3/4 w-2/5">
            {id && <Chatroom id={String(id)} />}
          </div>
        </div>
      </ChatroomLayout>
    </div>
  );
}
