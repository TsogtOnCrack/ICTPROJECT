import { TextInput } from "./components/TextInput";
import BgImage from "../public/assets/image1.png";
import Image from "next/image";
import Logo from "../public/assets/logo.svg";
import { Typography } from "./components/Typography";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-[#FFE400] w-screen h-screen flex flex-row">
      <div className="w-[50vw] bg-[#12557A] flex justify-center items-center">
        <div className="w-fit h-[50%] flex-col flex items-center justify-between">
          <Image alt="logo" width="full" src={Logo} />

          <Typography className="max-w-[480px] text-center" variant={"title"}>
            Efficency Comunication Colaboration
          </Typography>

          <div className="flex flex-row mt-8">
            <Link href="/SignUp">
              <Typography className=" cursor-pointer" variant={"h3"}>
                SignUp
              </Typography>
            </Link>
            <Typography className=" cursor-default" variant={"h3"}>
              /
            </Typography>

            <Link href="Login">
              <Typography className=" cursor-pointer" variant={"h3"}>
                LogIn
              </Typography>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-screen overflow-clip flex items-end">
        <div className="w-[50vw] flex justify-center h-fit">
          <Image width="full" alt="image of a robot toy" src={BgImage} />
        </div>
      </div>
    </div>
  );
}
