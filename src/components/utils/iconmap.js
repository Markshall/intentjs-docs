import {
  PiRocketLaunchBold,
  PiTerminalWindowDuotone,
  PiFunctionLight,
  PiFilesDuotone,
  PiMemoryDuotone,
  PiQueueDuotone,
  PiDatabase,
} from "react-icons/pi";
import { TbTimelineEventPlus } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";
import { LuLanguages } from "react-icons/lu";
import { BsDatabaseUp } from "react-icons/bs";
import { RxBoxModel } from "react-icons/rx";
import { RiGitRepositoryLine } from "react-icons/ri";

export const iconMap = {
  Installation: PiRocketLaunchBold,
  Configuration: PiRocketLaunchBold,
  "Directory Structure": PiRocketLaunchBold,
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
};
