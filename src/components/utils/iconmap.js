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
  PiDownloadDuotone,
  PiPenDuotone,
} from "react-icons/pi";
import {
  TbTimelineEventPlus,
  TbRoute2,
  TbTransform,
  TbHttpConnect,
  TbTransfer,
} from "react-icons/tb";
import {
  MdAlternateEmail,
  MdMiscellaneousServices,
  MdOutlineDesignServices,
} from "react-icons/md";
import { LuLanguages } from "react-icons/lu";
import { BsDatabaseUp } from "react-icons/bs";
import { RxBoxModel } from "react-icons/rx";
import { RiGitRepositoryLine } from "react-icons/ri";
import { VscBracketError, VscJson } from "react-icons/vsc";
import { BiReflectVertical } from "react-icons/bi";
import { GoPackageDependencies } from "react-icons/go";

export const iconMap = {
  Controllers: PiGameControllerDuotone,
  Guards: PiShieldCheckDuotone,
  Middlewares: TbTransfer,
  Installation: PiDownloadDuotone,
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
  Providers: GoPackageDependencies,
  "Service Providers": MdOutlineDesignServices,
  "Application Containers": PiShippingContainerDuotone,
  "Dependency Injection": GoPackageDependencies,
  Services: MdMiscellaneousServices,
  "First Project": PiRocketLaunchDuotone,
  Reflectors: BiReflectVertical,
  Contributing: PiPenDuotone,
};
