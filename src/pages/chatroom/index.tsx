import Button from "@/components/button";
import ChatBubble from "@/components/chat-bubble";
import RoomCard from "@/components/chatroom/room-card";
import PaperPlaneIcon from "@/components/icons/paper-plane";
import PlusSign from "@/components/icons/plus-sign";
import TextField from "@/components/text-input";
import { useEffect, useState } from "react";
import RoomForm from "@/components/room/room-form";
import { chatroomService } from "@/services";
import { ChatroomItem } from "@/types/chatroom";
import { toast } from "react-hot-toast";
import Chatroom from "@/components/chatroom/chatroom";

export default function ChatroomPage() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(-1);
  const [chatrooms, setChatrooms] = useState<ChatroomItem[]>([]);
  const [selectedRoomId, setSelectedRoomId] = useState<string>();

  const fetchRooms = async () => {
    const response = await chatroomService.getChatrooms();
    if (response) {
      setChatrooms(response);
    }
  };

  const handleDeleteRoom = async (id: string) => {
    try {
      await chatroomService.deleteChatroom(id).then((res) => {
        toast.success(res.message);
        fetchRooms();
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selected >= 0) {
      setIsOpenModal(true);
    }
  }, [selected]);

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="h-full w-full bg-[#6B7BD3] flex justify-center items-center">
        <div className="h-3/4 w-2/5">
          {selectedRoomId && <Chatroom id={selectedRoomId} />}
        </div>
      </div>
      <div className="h-full w-[1000px] bg-white p-6 relative flex flex-col gap-y-5 overflow-scroll">
        {chatrooms.map((chatroom, index) => {
          return (
            <RoomCard
              key={chatroom.id}
              onEdit={() => {
                setSelected(index);
              }}
              chatRoomItem={chatroom}
              onDelete={handleDeleteRoom}
              onSelect={(value) => setSelectedRoomId(value)}
            />
          );
        })}

        <div
          className="fixed bottom-4 right-4 h-24 w-24 bg-blue-500 rounded-full flex justify-center items-center cursor-pointer hover:bg-blue-700"
          onClick={() => setIsOpenModal(true)}
        >
          <PlusSign fill="#ffffff" />
        </div>
      </div>
      <RoomForm
        open={isOpenModal}
        onClose={() => {
          setSelected(-1);
          setIsOpenModal(false);
        }}
        room={chatrooms[selected]}
        onSubmit={() => fetchRooms()}
      />
    </div>
  );
}
