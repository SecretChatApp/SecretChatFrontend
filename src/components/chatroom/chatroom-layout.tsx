import { chatroomService } from "@/services";
import { ChatroomItem } from "@/types/chatroom";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import RoomCard from "./room-card";
import PlusSign from "../icons/plus-sign";
import RoomForm from "../room/room-form";

interface ChatroomLayoutProps {
  children: React.ReactNode;
  onSelect: (id: string) => void;
}

export default function ChatroomLayout(props: Readonly<ChatroomLayoutProps>) {
  const { children, onSelect } = props;
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(-1);
  const [chatrooms, setChatrooms] = useState<ChatroomItem[]>([]);

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
      {children}
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
              onSelect={(value) => onSelect(value)}
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
      <Toaster position="top-right" />
    </div>
  );
}
