import Image from "next/image";
import { LuMemoryStick } from "react-icons/lu";

export const RedisLogo = () => {
  return <Image src="/redis.png" width={30} height={30} />;
};

export const InMemoryCacheLogo = () => {
  return <LuMemoryStick size={30} />;
};
