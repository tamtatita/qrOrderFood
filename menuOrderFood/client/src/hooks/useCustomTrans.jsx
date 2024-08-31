import { useTranslation } from "react-i18next";

const useCustomTrans = () => {
  const { t } = useTranslation();

  const customT = (titleKey, key) => {
    return t(`${titleKey}.${key}`);
  };

  return customT;
};

export default useCustomTrans;
