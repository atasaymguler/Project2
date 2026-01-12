import { FaBars } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { moveAsidebar } from "../redux/appSlice";
export default function Asidebar() {
  // const asideIcon = [
  //   {
  //     icon: FaBars,
  //   },
  //   {
  //     icon: FaHome,
  //   },
  //   {
  //     icon: MdPerson,
  //   },
  // ];
  const asideIcon = [
    {
      name: "Menu",
      icon: FaBars,
    },
    {
      name: "Home",
      icon: FaHome,
    },
    {
      name: "Person",
      icon: MdPerson,
    },
  ];
  const asideItems = [
    {
      name: "Menu",
      icon: <FaBars />,
    },
    {
      name: "Home",
      icon: <FaHome />,
    },
    {
      name: "Person",
      icon: <MdPerson />,
    },
  ];

  const { asidebar } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  return (
    <aside className="h-screen flex">
      <div
        className={`w-15 h-full bg-gray-200 px-3 py-6 flex flex-col items-center space-y-2 ${
          asidebar ? "hidden" : "block"
        } lg:hidden`}
      >
        {asideIcon.map((item, index) => {
          const Icon = item.icon;
          return item.name === "Menu" ? (
            <Icon
              key={index}
              onClick={() => dispatch(moveAsidebar())}
              className="icon"
            />
          ) : (
            <Icon key={index} className="icon" />
          );
        })}
      </div>
      <div
        className={`w-50 h-full fixed ${
          asidebar ? "translate-x-0" : "-translate-x-50"
        } bg-gray-200 px-3 py-6 flex flex-col space-y-2 lg:static lg:translate-x-0 transition-all duration-300`}
      >
        {asideItems.map((item, index) =>
          item.name === "Menu" ? (
            <div
              key={index}
              onClick={() => dispatch(moveAsidebar())}
              className="flex items-center gap-2 hover:bg-gray-400 rounded-2xl pl-2 hover:cursor-pointer"
            >
              <div className="text-xl p-2">{item.icon}</div>
              <span> {item.name} </span>
            </div>
          ) : (
            <div
              key={index}
              className="flex items-center gap-2 hover:bg-gray-400 rounded-2xl pl-2 hover:cursor-pointer"
            >
              <div className="text-xl p-2">{item.icon}</div>
              <span> {item.name} </span>
            </div>
          )
        )}
      </div>
    </aside>
  );
}
