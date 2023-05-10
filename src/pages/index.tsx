import Image from "next/image";
import { Inter } from "next/font/google";
import LoginForm from "./login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col ">    
      <div className="flex h-full w-full items-center justify-center">
        {/* <LoginForm /> */}
      </div>
    </div>
  );
}
