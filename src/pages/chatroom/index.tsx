import Button from "@/components/button";
import PaperPlaneIcon from "@/components/icons/paper-plane";
import TextField from "@/components/text-input";

export default function Chatroom() {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="h-full w-full bg-[#6B7BD3] flex justify-center items-center">
        <div className="h-3/4 w-2/5 bg-[#434240] rounded-lg flex flex-col items-center p-6">
          <div className="w-full h-full"></div>
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
      <div className="h-full w-[1000px] bg-white"></div>
    </div>
  );
}
