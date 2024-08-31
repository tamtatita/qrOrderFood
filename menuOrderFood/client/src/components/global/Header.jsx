import { Select } from "antd";
import { useLoadConstants } from "../../hooks";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { constants } = useLoadConstants();
  const { i18n } = useTranslation();
  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);
  };
  return (
    <div>
      <Select
        onChange={handleLanguageChange}
        defaultValue={i18n.language}
        className="w-[200px]"
      >
        {constants?.languages?.map((item) => (
          <Select.Option key={item.code} value={item.code}>
            <div className="flex items-center gap-2">
              <img
                src={item.image}
                className="size-5 object-cover rounded-full"
                alt=""
              />
              <h2>{item.title}</h2>
            </div>
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default Header;
