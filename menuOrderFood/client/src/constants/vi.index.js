import { TiHomeOutline } from "react-icons/ti";
import { BsCart } from "react-icons/bs";
import { usaFlag, vietnamFlag } from "../utils/Images";
export const bottomNavigations = [
  {
    id: 1,
    title: "Trang chủ",
    icon: TiHomeOutline,
  },
  { id: 2, title: "Giỏ hàng", icon: BsCart },
];

export const nanno = {
  title: "Nanno",
  description: "Nanno là ứng dụng mua sắm hàng đầu tại Việt Nam",
};

export const languages = [
  {
    id: 1,
    title: "Tiếng Việt",
    code: "vi",
    image: vietnamFlag,
  },
  {
    id: 2,
    title: "Tiếng Anh",
    code: "en",
    image: usaFlag,
  },
];
