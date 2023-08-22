import Button from "@/components/button";
import TextField from "@/components/text-input";
import { useRouter } from "next/router";
import Outside from "../outside";

interface RoomFormProps {
  open: boolean;
  onClose: () => void;
  roomId?: string;
}

export default function RoomForm({ open, onClose, roomId }: RoomFormProps) {
  if (!open) return null;

  return (
    <div className="flex h-screen w-full flex-col justify-center items-center fixed inset-0 z[70] place-content-center bg-gray-500 bg-opacity-50">
      <Outside onClick={onClose}>
        <div className="w-[1109px] bg-[#f3f2f2] rounded-lg flex flex-col items-center p-6 gap-y-3">
          <h1 className="text-2xl">Create your story</h1>
          <TextField
            type="text"
            placeholder="Enter your title"
            className="w-[766px] bg-white"
          />
          <TextField
            type="text"
            placeholder="Enter your description"
            className="w-[766px] bg-white"
            multiline
          />
          <hr className="border-1 border-slate-200 w-[766px]" />

          <Button className="w-[766px]">Create</Button>
        </div>
      </Outside>
    </div>
  );
}
