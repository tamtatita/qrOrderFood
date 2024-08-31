import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const useLoadConstants = () => {
  const { i18n } = useTranslation();
  const [constants, setConstants] = useState(null);

  useEffect(() => {
    const loadConstants = async () => {
      console.log("reload");
      let constantsData;

      if (i18n.language === "vi") {
        constantsData = await import("../constants/vi.index.js");
      } else if (i18n.language === "en") {
        constantsData = await import("../constants/en.index.js");
      }

      setConstants(constantsData);
    };

    console.log(constants, "constants");

    loadConstants();
  }, [i18n.language]);

  return { constants };
};

export default useLoadConstants;
