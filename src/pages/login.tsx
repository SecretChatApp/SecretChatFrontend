import TextField from "@/components/text-input";

export default function LoginForm() {
  return (
    <div className="flex h-screen w-full flex-col justify-center items-center ">
      <div className="w-1/4 h-1/2 border-2 border-black rounded-xl flex items-center justify-center">
        <form action="#">
          <TextField 
            label="Email"
            type="email"
            placeholder="Enter your email"
          />
          <TextField 
            label="Password"
            type="password"
            placeholder="Enter your password"
            classLabel="mt-4"
          />          
        </form>
      </div>
    </div>
  );
}
