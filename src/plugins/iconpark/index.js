import Vue from "vue";
import {
  Home,
  User,
  SettingTwo,
  Permissions,
  HamburgerButton,
  DataUser,
  EveryUser,
  Avatar,
  Power,
  MenuUnfoldOne,
  MenuFoldOne,
  Gastrointestinal,
  Torch,
  Left,
  Right,
  UpOne,
  DownOne,
  Minus,
  Plus,
  Dot,
  ArrowRight,
  Sort,
  Help,
  Error,
  Download,
  Search,
} from "@icon-park/vue";

const iconList = [
  {
    icon: "Home",
    module: Home,
  },
  {
    icon: "User",
    module: User,
  },
  {
    icon: "SettingTwo",
    module: SettingTwo,
  },
  {
    icon: "Permissions",
    module: Permissions,
  },
  {
    icon: "SettingTwo",
    module: SettingTwo,
  },
  {
    icon: "HamburgerButton",
    module: HamburgerButton,
  },
  {
    icon: "EveryUser",
    module: EveryUser,
  },
  {
    icon: "DataUser",
    module: DataUser,
  },
  {
    icon: "Avatar",
    module: Avatar,
  },
  {
    icon: "Power",
    module: Power,
  },
  {
    icon: "MenuUnfoldOne",
    module: MenuUnfoldOne,
  },
  {
    icon: "MenuFoldOne",
    module: MenuFoldOne,
  },
  {
    icon: "Gastrointestinal",
    module: Gastrointestinal,
  },
  {
    icon: "Torch",
    module: Torch,
  },
  {
    icon: "Left",
    module: Left,
  },
  {
    icon: "Right",
    module: Right,
  },
  {
    icon: "UpOne",
    module: UpOne,
  },
  {
    icon: "DownOne",
    module: DownOne,
  },
  {
    icon: "Minus",
    module: Minus,
  },
  {
    icon: "Plus",
    module: Plus,
  },
  {
    icon: "Dot",
    module: Dot,
  },
  {
    icon: "ArrowRight",
    module: ArrowRight,
  },
  {
    icon: "Sort",
    module: Sort,
  },
  {
    icon: "Help",
    module: Help,
  },
  {
    icon: "Error",
    module: Error,
  },
  {
    icon: "Download",
    module: Download,
  },
  {
    icon: "Search",
    module: Search,
  },
];

export default function iconPark() {
  /**
   * 1. https://iconpark.oceanengine.com/official
   * 2.页面使用 <alignment-horizontal-top theme="outline" size="15" fill="#fff"/>
   */
  iconList.forEach((obj) => {
    Vue.component(obj.icon, obj.module);
  });
}
