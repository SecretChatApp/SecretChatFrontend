import Button from "@/components/button";
import TextField from "@/components/text-input";
import Outside from "../outside";
import React, { useEffect, useState } from "react";
import { ChatroomItem, CreateChatroomPayload } from "@/types/chatroom";
import { chatroomService } from "@/services";
import { toast } from "react-hot-toast";

interface RoomFormProps {
  open: boolean;
  onClose: () => void;
  room?: ChatroomItem;
  onSubmit: () => void;
}

export default function RoomForm({
  open,
  onClose,
  room,
  onSubmit,
}: RoomFormProps) {
  const [title, setTitle] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [id, setId] = useState<string>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (!title) return;
    event.preventDefault();

    const payload: CreateChatroomPayload = {
      title,
      subject,
    };

    try {
      if (id) {
        await chatroomService.updateChatroom(id, payload).then((res) => {
          toast.success(res.message);
          onClose();
          onSubmit();
        });
      } else {
        await chatroomService.postCreateRoom(payload).then((res) => {
          toast.success(res.message);
          onClose();
          onSubmit();
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (room) {
      setTitle(room.title);
      setSubject(room.subject);
      setId(room.id);
    }
  }, [room]);

  if (!open) return null;

  return (
    <div className="flex h-screen w-full flex-col justify-center items-center fixed inset-0 z[70] place-content-center bg-gray-500 bg-opacity-50">
      <Outside onClick={onClose}>
        <div className="w-[1109px] bg-[#f3f2f2] rounded-lg flex flex-col items-center p-6 gap-y-3">
          <h1 className="text-2xl">Create your story</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              placeholder="Enter your title"
              className="w-[766px] bg-white"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              type="text"
              placeholder="Enter your description"
              className="w-[766px] bg-white"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              multiline
            />
          </form>
          <hr className="border-1 border-slate-200 w-[766px]" />

          <Button className="w-[766px]" type="submit">
            Create
          </Button>
        </div>
      </Outside>
    </div>
  );
}
