import Chatroom from "@/components/chatroom/chatroom";
import { useRouter } from "next/router";
import ChatroomLayout from "@/components/chatroom/chatroom-layout";
import { useEffect, useState } from "react";

export default function ChatroomPage() {
  const router = useRouter();
  const id = router.query.id;
  const [roomId, setRoomId] = useState<string>();

  const handleNavigate = (value: string) => {
    router.push(`/chatroom?id=${value}`);
  };

  useEffect(() => {
    if (id) setRoomId(String(id));
  }, [id]);

  return (
    <div>
      <ChatroomLayout
        onSelect={(value) => handleNavigate(value)}
        onCollapse={(value) => {}}
      >
        <div className="h-full w-full bg-[#6B7BD3] flex justify-center items-center">
          <div className="h-[600px] w-[500px]">
            {id && <Chatroom id={String(roomId)} />}
          </div>
        </div>
      </ChatroomLayout>
    </div>
  );
}
