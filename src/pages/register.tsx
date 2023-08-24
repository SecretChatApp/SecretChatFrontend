import Button from "@/components/button";
import TextField from "@/components/text-input";
import { authService } from "@/services";
import { RegisterPayload } from "@/types/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function RegisterForm() {
  const router = useRouter();
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload: RegisterPayload = {
      name: username as string,
      email: email as string,
      password: password as string,
      confirmPassword: confirmPassword as string,
    };

    try {
      await authService.register(payload).then((res) => {
        toast.success(res.message);
        router.push('/login')
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen w-full flex-col justify-center items-center ">
      <div className="w-1/4 p-8 border-2 border-black rounded-xl flex flex-col justify-center items-center">
        <h1 className="text-2xl mb-3">Register</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            classLabel="mt-4"
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            classLabel="mt-4"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            classLabel="mt-4"
          />
          <TextField
            label="Password Confirm"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
      <Toaster position="top-right" />
    </div>
  );
}
