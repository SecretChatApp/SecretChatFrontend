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
  onCollapse: (value: boolean) => void;
}

export default function ChatroomLayout(props: Readonly<ChatroomLayoutProps>) {
  const { children, onSelect, onCollapse } = props;
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(-1);
  const [chatrooms, setChatrooms] = useState<ChatroomItem[]>([]);
  const [isCollapse, setIsCollapse] = useState(false);
  const handleCollapse = () => {
    onCollapse(!isCollapse);
    setIsCollapse(!isCollapse);
  };

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
      <div
        className={`h-full ${
          isCollapse ? "w-[20px]" : "w-[30%]"
        } bg-white p-6 flex flex-col transition-all duration-500 ease-in-out border`}
      >
        <div className="w-full relative overflow-visible">
          <div
            className="absolute top-2 -left-11 h-10 w-10 rounded-full bg-white flex items-center justify-center cursor-pointer"
            onClick={handleCollapse}
          >
            <h1 className="text-2xl font-bold">{isCollapse ? "<" : ">"}</h1>
          </div>
        </div>
        <div className=" relative flex flex-col gap-y-5 overflow-scroll">
          {!isCollapse &&
            chatrooms.map((chatroom, index) => {
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
