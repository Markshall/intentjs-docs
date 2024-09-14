import {
  PiRocketLaunchDuotone,
  PiTerminalWindowDuotone,
  PiFunctionLight,
  PiFilesDuotone,
  PiMemoryDuotone,
  PiQueueDuotone,
  PiDatabase,
  PiGearSixDuotone,
  PiTreeViewDuotone,
  PiListChecksDuotone,
  PiGameControllerDuotone,
  PiTreeDuotone,
  PiShieldCheckDuotone,
  PiShippingContainerDuotone,
} from "react-icons/pi";
import {
  TbTimelineEventPlus,
  TbRoute2,
  TbTransform,
  TbWood,
  TbHttpConnect,
  TbTransfer,
} from "react-icons/tb";
import { MdAlternateEmail, MdOutlineDesignServices } from "react-icons/md";
import { LuLanguages } from "react-icons/lu";
import { BsDatabaseUp } from "react-icons/bs";
import { RxBoxModel } from "react-icons/rx";
import { RiGitRepositoryLine } from "react-icons/ri";
import { VscBracketError, VscJson } from "react-icons/vsc";
import { BiInjection } from "react-icons/bi";

export const iconMap = {
  Controllers: PiGameControllerDuotone,
  Guards: PiShieldCheckDuotone,
  Middlewares: TbTransfer,
  Installation: PiRocketLaunchDuotone,
  Cache: PiMemoryDuotone,
  Console: PiTerminalWindowDuotone,
  "File Storage": PiFilesDuotone,
  Helpers: PiFunctionLight,
  Queues: PiQueueDuotone,
  Events: TbTimelineEventPlus,
  Mailers: MdAlternateEmail,
  Localization: LuLanguages,
  "DB Introduction": PiDatabase,
  Migrations: BsDatabaseUp,
  Models: RxBoxModel,
  Repository: RiGitRepositoryLine,
  Configuration: PiGearSixDuotone,
  "Directory Structure": PiTreeViewDuotone,

  Routing: TbRoute2,
  Requests: TbHttpConnect,
  Response: VscJson,
  Transformers: TbTransform,
  Validation: PiListChecksDuotone,
  Logging: PiTreeDuotone,
  "Error Handling": VscBracketError,
  Providers: BiInjection,
  "Service Providers": MdOutlineDesignServices,
  "Service Containers": PiShippingContainerDuotone,
};
