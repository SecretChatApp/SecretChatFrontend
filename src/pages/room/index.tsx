import Button from "@/components/button";
import TextField from "@/components/text-input";
import { useRouter } from "next/router";

export default function CreateRoom() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  }

  return (
    <div className="flex h-screen w-full flex-col justify-center items-center">
      <div className="w-[1109px] flex justify-end">
        <Button className="mb-5" onClick={handleBack}>Back</Button>
      </div>
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
    </div>
  );
}
