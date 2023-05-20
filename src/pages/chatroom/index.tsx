import Button from "@/components/button";
import ChatBubble from "@/components/chat-bubble";
import RoomCard from "@/components/chatroom/room-card";
import PaperPlaneIcon from "@/components/icons/paper-plane";
import PlusSign from "@/components/icons/plus-sign";
import TextField from "@/components/text-input";
import { useState } from "react";
import RoomForm from "@/components/room/room-form";

export default function Chatroom() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="h-full w-full bg-[#6B7BD3] flex justify-center items-center">
        <div className="h-3/4 w-2/5 bg-[#434240] rounded-lg flex flex-col items-center p-6">
          <div className="w-full h-full bg-gray-300 gap-y-5 overflow-scroll">
            <ChatBubble position="right">
              right Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nemo, vel.
            </ChatBubble>
            <ChatBubble position="left">
              left Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit, itaque sapiente! Pariatur sed distinctio reprehenderit
              natus impedit ab quibusdam quaerat.
            </ChatBubble>
            <ChatBubble position="left">
              left Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit, itaque sapiente! Pariatur sed distinctio reprehenderit
              natus impedit ab quibusdam quaerat.
            </ChatBubble>
            <ChatBubble position="left">
              left Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit, itaque sapiente! Pariatur sed distinctio reprehenderit
              natus impedit ab quibusdam quaerat.
            </ChatBubble>
            <ChatBubble position="left">
              left Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit, itaque sapiente! Pariatur sed distinctio reprehenderit
              natus impedit ab quibusdam quaerat.
            </ChatBubble>
            <ChatBubble position="left">
              left Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit, itaque sapiente! Pariatur sed distinctio reprehenderit
              natus impedit ab quibusdam quaerat.
            </ChatBubble>
            <ChatBubble position="left">
              left Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit, itaque sapiente! Pariatur sed distinctio reprehenderit
              natus impedit ab quibusdam quaerat.
            </ChatBubble>
            <ChatBubble position="left">
              left Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit, itaque sapiente! Pariatur sed distinctio reprehenderit
              natus impedit ab quibusdam quaerat.
            </ChatBubble>
          </div>
          <div className="w-full h-1/6 flex justify-center items-center">
            <div className="w-full">
              <TextField className="bg-white p-6 mt-8" size="large" />
            </div>
            <Button
              className="w-[76px] p-7 mt-8 ml-4 bg-blue-500 rounded-md flex justify-center items-center"
              size="large"
            >
              <PaperPlaneIcon fill="#000000" />
            </Button>
          </div>
        </div>
      </div>
      <div className="h-full w-[1000px] bg-white p-6 relative flex flex-col gap-y-5 overflow-scroll">
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <div
          className="fixed bottom-4 right-4 h-24 w-24 bg-blue-500 rounded-full flex justify-center items-center cursor-pointer hover:bg-blue-700"
          onClick={() => setIsOpenModal(true)}
        >
          <PlusSign fill="#ffffff" />
        </div>
      </div>
      {isOpenModal && (
        <RoomForm open={isOpenModal} onClose={() => setIsOpenModal(false)} />
      )}
    </div>
  );
}
