import { PenBox } from "lucide-react";
import ava from "../assets/icons/photo.svg";
import ProfilControl from "../components/ProfilControl";
import Icon from "../components/ui/Icon";
import Input from "../components/ui/Input";
import "../index.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useProfile from "../hooks/requests/useProfile";

const Profil = () => {
  const [currenTab, setCurrenTab] = useState("");
  const { data: profile, loading, error } = useProfile();

  if (loading) return <div className="ml-[240px] pt-[50px]">Loading...</div>;
  if (error) return <div className="ml-[240px] pt-[50px]">Error: {(error)}</div>;
  if (!profile) return null;

  return (
    <div className="ml-[240px] pt-[50px] pb-[30px] ">
      <div className="flex justify-between items-center mt-[10px]">
        <h1 className="text-[35px] font-bold">My Profile</h1>
        <NavLink
          to={"/settings"}
          className="flex items-center gap-x-2 text-[15px] bg-white shadow p-[12px_15px] rounded-[14px]"
        >
          <Icon.Settings />
        </NavLink>
      </div>

      <div className="flex">
        <div className="w-[275px] shadow bg-white rounded-[24px] mt-[28px] pt-[26px]">
          <div className="relative mb-[16px] px-[23px]">
            <button className="left-53 absolute p-[11px_11px] bottom-6 bg-[#F4F9FD] rounded-full">
              <PenBox />
            </button>
            <div className="border-[#3F8CFF] border-2 rounded-full w-[64px] h-[64px] absolute"></div>
            <img
              width={64}
              height={64}
              src={profile.avatar || ava}
              alt="Profile avatar"
              className="rounded-full object-cover"
            />
          </div>

          <div className="px-[23px] flex flex-col gap-y-1 text-[#0A1629]">
            <h4 className="text-[21px] font-bold">{profile.name}</h4>
            <span className="text-[14px] font-light">{profile.position}</span>
          </div>

          <hr className="mt-[29px] text-[#dbe2ea] border-[1px]" />

          <div className="px-[23px] pt-[28px]">
          
            <h3 className="text-[#0A1629] text-[18px] font-bold">Main Info</h3>
            <div>
              <div className="pt-[12px]">
                <Input inputClassName="w-full" label="Position" placeholder={profile.position} type="text" />
              </div>
              <div className="pt-[15px]">
                <Input inputClassName="w-full" label="Company" placeholder={profile.company} type="text" />
              </div>
              <div className="pt-[15px]">
                <Input inputClassName="w-full" label="Location" placeholder={profile.location} type="text" locIcon />
              </div>
              <div className="pt-[15px] pb-[15px]">
                <Input inputClassName="w-full" label="Birthday Date" placeholder={profile.birthday} type="date" calIcon />
              </div>
            </div>

            <div>
              <h3 className="text-[#0A1629] text-[18px] font-bold">Contact Info</h3>
              <div className="pt-[12px]">
                <Input inputClassName="w-full" label="Email" placeholder={profile.email} type="email" />
              </div>
              <div className="pt-[12px]">
                <Input inputClassName="w-full" label="Mobile Number" placeholder={profile.phone} type="tel" />
              </div>
              <div className="pt-[12px] pb-[39px]">
                <Input inputClassName="w-full" label="Skype" placeholder={profile.skype} type="text" />
              </div>
            </div>
          </div>
        </div>

        <ProfilControl />
      </div>

      {currenTab === "profil-control" ? (
        <ProfilControl />
      ) : currenTab === "settings" ? (
        <Icon.Settings />
      ) : null}
    </div>
  );
};

export default Profil;
