import { FaBars } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
export default function Asidebar() {
  const asideIcon = [
    {
      icon: FaBars,
    },
    {
      icon: FaHome,
    },
    {
      icon: MdPerson,
    },
  ];
  const asideItems = [
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

  // () => ( ) → implicit return (otomatik return)
  // () => { } → explicit return gerekir  bu jsx değil arrow function kuralıdır.

  const deneme = () =>(
    5
  )
  console.log(deneme());
  return (
    <aside className="h-screen flex">
      <div className="w-15 h-full bg-gray-200 px-3 py-6 flex flex-col items-center  space-y-2">
        {asideIcon.map((item, index) => {
          const Icon = item.icon;
          return <Icon key={index} className="icon" />;
        })}
      </div>
      <div className="w-50 h-full bg-gray-200 px-3 py-6 flex flex-col space-y-2">
        {asideItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div className="flex items-center gap-2 hover:bg-gray-400 rounded-2xl pl-2 hover:cursor-pointer">
              <Icon key={index} className="text-4xl p-2" />
              <span> {item.name} </span>
            </div>
          );
        })}
      </div>
    </aside>
  );
}