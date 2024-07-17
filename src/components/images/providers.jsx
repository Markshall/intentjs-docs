import Image from "next/image";
import { LuMemoryStick } from "react-icons/lu";

export const Logo = () => {
  return (
    <Image src="/docs/logo.png" width={30} height={30} alt="logo" unoptimized />
  );
};

export const RedisLogo = () => {
  return (
    <Image
      src="/docs/redis.png"
      width={30}
      height={30}
      alt="redislogo"
      unoptimized
    />
  );
};

export const Enterprise = () => {
  return (
    <Image
      src="/docs/enterprise.png"
      width={220}
      height={200}
      unoptimized
      alt="enterpriselogo"
      className="rounded-t-md border-b border-[#282829]"
    />
  );
};

export const InMemoryCacheLogo = () => {
  return <LuMemoryStick size={30} alt="memorylogo" />;
};
