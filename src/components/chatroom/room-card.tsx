import { ChatroomItem } from "@/types/chatroom";
import Button from "../button";

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
  return (
    <div className="w-full flex bg-[#D9D9D9] rounded-lg p-4 h-40 drop-shadow-md ">
      <div className="bg-white w-[80%] h-full p-3 flex flex-col rounded-lg">
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
      <div className="w-[20%] h-full px-3 flex flex-col justify-between">
        <Button
          fullWidth={true}
          className="bg-blue-500"
          onClick={() => {
            onEdit();
          }}
        >
          Edit
        </Button>
        <Button
          fullWidth={true}
          className="bg-red-500"
          onClick={() => onDelete(chatRoomItem.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
