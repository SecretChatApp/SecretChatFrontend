import Button from "@/components/button";
import TextField from "@/components/text-input";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <div className="flex h-screen w-full flex-col justify-center items-center ">
      <div className="w-1/4 p-8 border-2 border-black rounded-xl flex flex-col justify-center items-center">
        <h1 className="text-2xl mb-3">Register</h1>
        <form action="#">
          <TextField
            label="Username"
            type="text"
            placeholder="Enter your username"
            classLabel="mt-4"
          />
          <TextField
            label="Email"
            type="email"
            placeholder="Enter your email"
            classLabel="mt-4"
          />
          <TextField
            label="Password"
            type="password"
            placeholder="Enter your password"
            classLabel="mt-4"
          />
          <TextField
            label="Password Confirm"
            type="password"
            placeholder="Enter your password again"
            classLabel="mt-4"
          />

          <Link
            href={"/login"}
            className="text-blue-500 hover:text-blue-700 underline mt-5"
          >
            Sudah punya akun?
          </Link>

          <Button className="mt-5" fullWidth={true}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
