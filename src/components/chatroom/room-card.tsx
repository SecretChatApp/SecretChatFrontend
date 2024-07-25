import { ChatroomItem } from "@/types/chatroom";
import Button from "../button";
import toast from "react-hot-toast";
import TrashCanIcon from "../icons/trash-can";
import CopyIcon from "../icons/copy";
import EditIcon from "../icons/edit";

interface RoomCardProps {
  onEdit: () => void;
  chatRoomItem: ChatroomItem;
  onDelete: (id: string) => void;
  onSelect: (id: string) => void;
}

export default function RoomCard({
  onEdit,
  chatRoomItem,
  onDelete,
  onSelect,
}: RoomCardProps) {
  const handleCopyToClipboard = () => {
    const url = `${window.location.protocol}//${window.location.host}/room/${chatRoomItem.id}`;
    navigator.clipboard.writeText(url);
    toast.success("Copied to clipboard");
  };
  return (
    <div className="w-full flex lg:flex-row bg-[#D9D9D9] rounded-lg p-4 lg:h-40 h-48 drop-shadow-md flex-col">
      <div className="bg-white lg:w-[80%] h-full p-3 flex flex-col rounded-lg w-full">
        <span className="text-xl font-bold">{chatRoomItem.title}</span>
        <div className="h-[75%] w-full">{chatRoomItem.subject}</div>
        <div className="h-[25%] w-full flex flex-col justify-end">
          <Button
            fullWidth={true}
            size="medium"
            onClick={() => onSelect(chatRoomItem.id)}
          >
            Go to
          </Button>
        </div>
      </div>
      <div className="lg:w-[20%] h-full p-3 flex lg:flex-col lg:gap-y-1 flex-row items-center justify-around w-full gap-x-2">
        <Button
          fullWidth={true}
          className="bg-blue-500"
          onClick={() => {
            onEdit();
          }}
        >
          <EditIcon />
        </Button>
        <Button
          fullWidth={true}
          className="bg-green-500"
          onClick={() => {
            handleCopyToClipboard();
          }}
        >
          <CopyIcon />
        </Button>
        <Button
          fullWidth={true}
          className="bg-red-500"
          onClick={() => onDelete(chatRoomItem.id)}
        >
          <TrashCanIcon />
        </Button>
      </div>
    </div>
  );
}
