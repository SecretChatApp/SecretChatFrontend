import Button from "../button";

interface RoomCardProps {
  onEdit: (id: string) => void;
}

export default function RoomCard({ onEdit }: RoomCardProps) {
  return (
    <div className="w-full flex bg-[#D9D9D9] rounded-lg p-4 h-40 drop-shadow-md ">
      <div className="bg-white w-[80%] h-full p-3 flex flex-col rounded-lg">
        <div className="h-[75%] w-full">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
          minima rerum beatae soluta, nulla veniam.
        </div>
        <div className="h-[25%] w-full flex flex-col justify-end">
          <Button fullWidth={true} size="medium">
            Go to
          </Button>
        </div>
      </div>
      <div className="w-[20%] h-full px-3 flex flex-col justify-between">
        <Button
          fullWidth={true}
          className="bg-blue-500"
          onClick={() => {
            onEdit("123");
          }}
        >
          Edit
        </Button>
        <Button fullWidth={true} className="bg-red-500">
          Delete
        </Button>
      </div>
    </div>
  );
}
