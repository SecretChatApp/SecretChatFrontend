import Chatroom from "@/components/chatroom/chatroom";
import { useRouter } from "next/router";

export default function EditRoom() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="flex h-screen w-full flex-col justify-center items-center">
      <div className="h-full w-full bg-[#6B7BD3] flex justify-center items-center">
        <div className="h-3/4 w-2/5">{id && <Chatroom id={String(id)} />}</div>
      </div>
    </div>
  );
}
