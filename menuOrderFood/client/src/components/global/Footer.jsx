import { useLoadConstants } from "../../hooks";
const Footer = () => {
  const { constants } = useLoadConstants();
  return (
    <div className="fixed bottom-2 bg-gray-100 rounded-full flex items-center gap-3 px-3 py-1 w-[calc(100%-16px)] mx-auto ">
      {constants?.bottomNavigations?.map((item) => (
        <div key={item.id} className="p-2 flex flex-col items-center">
          <item.icon size={24} />
          <p className="text-sm">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Footer;
