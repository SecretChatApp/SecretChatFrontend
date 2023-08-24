import Button from "@/components/button";
import TextField from "@/components/text-input";
import { authService } from "@/services";
import { LoginPayload } from "@/types/auth";
import { getCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function LoginForm() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      return;
    } else if (!password) {
      return;
    }

    const payload: LoginPayload = {
      email: email,
      password: password,
    };

    try {
      await authService.login(payload).then((res) => {        
        setCookie("access_token", res.token)
        if(getCookie('access_token')){
          toast.success(res.message);
          window.location.href = '/chatroom'
        }

      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen w-full flex-col justify-center items-center ">
      <div className="w-1/4 p-8 border-2 border-black rounded-xl flex flex-col justify-center items-center">
        <h1 className="text-2xl mb-3">Login</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email"
          />
          <TextField
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your password"
            classLabel="mt-4"
          />

          <Link
            href={"/register"}
            className="text-blue-500 hover:text-blue-700 underline mt-5"
          >
            Belum punya akun?
          </Link>

          <Button className="mt-5" fullWidth={true}>
            Login
          </Button>
        </form>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}
