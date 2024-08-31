import { TiHomeOutline } from "react-icons/ti";
import { BsCart } from "react-icons/bs";
import { usaFlag, vietnamFlag } from "../utils/Images";
export const bottomNavigations = [
  {
    id: 1,
    title: "home",
    icon: TiHomeOutline,
  },
  { id: 2, title: "cart", icon: BsCart },
];

export const nanno = {
  title: "Nanno",
  description: "Nanno is the best",
};

export const languages = [
  {
    id: 1,
    title: "Vietnamese",
    code: "vi",
    image: vietnamFlag,
  },
  {
    id: 2,
    title: "English",
    code: "en",
    image: usaFlag,
  },
];
