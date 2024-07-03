import Image from "next/image";
import { LuMemoryStick } from "react-icons/lu";

export const Logo = () => {
  return <Image src="/docs/trident.png" width={30} height={30} alt="logo" />;
};

export const RedisLogo = () => {
  return <Image src="/redis.png" width={30} height={30} alt="redislogo" />;
};

export const Enterprise = () => {
  return (
    <Image
      src="/docs/enterprise.png"
      width={220}
      height={200}
      alt="enterpriselogo"
      className="rounded-t-md border-b border-[#282829]"
    />
  );
};

export const InMemoryCacheLogo = () => {
  return <LuMemoryStick size={30} alt="memorylogo" />;
};
