import Avatar from "../assets/icons/photo.svg";
import Icon from "./ui/Icon";
import "../index.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-[1470px]  h-[47px] pl-[240px] flex justify-between ">
      <div className="relative w-[412px]">
        <input
          type="text"
          className="w-full h-[48px] py-[11px] pl-[42px] pr-[10px] outline-0  rounded-[14px] bg-white shadow"
          placeholder="Search"
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 ">
          <Icon.Search />
        </div>
      </div>

      <div className="flex gap-x-[24px] ">
        <button className="cursor-pointer shadow p-[12px] bg-white  rounded-[12px]">
          <Icon.Notifications />
        </button>
        <NavLink
          to={"/my-profil"}
          className="cursor-pointer flex gap-x-4 bg-white shadow items-center  px-[14px] rounded-[14px]"
        >
          <img src={Avatar} alt="Avatar" />
          <span>Evan Yetas</span>
          <Icon.bottomIcon />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
