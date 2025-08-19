import React, { useState } from "react";
import Icon from "../components/ui/Icon";
import MyVacantion from "./mVacantion";
import Profile from "./Projects";
import Team from "./Team";

const ProfilControl = () => {
  const [currenTab, setCurrenTab] = useState("project");

  return (
    <>
      <div className="flex items-start justify-between  w-[700px]  pb-[30px] h-[50px] mt-[30px]  pl-[30px]">
        <div className="flex justify-between  py-[5px] w-[460px] h-[48px] px-[4px] bg-[#E6EDF5] rounded-[24px] ">
          <button
            onClick={() => setCurrenTab("project")}
            className={`p-[9px_18px] w-[194px]  flex justify-center cursor-pointer rounded-full text-black ${
              currenTab === "project"
                ? "bg-[#3F8CFF] text-white font-bold transition-all"
                : ""
            }`}
          >
            Project
          </button>
          <button
            onClick={() => setCurrenTab("team")}
            className={`p-[9px_18px] w-[194px] flex justify-center cursor-pointer rounded-full text-black ${
              currenTab === "team"
                ? "bg-[#3F8CFF] text-white font-bold transition-all"
                : ""
            }`}
          >
            Team
          </button>
          <button
            onClick={() => setCurrenTab("my-vacations")}
            className={`p-[9px_18px] w-[194px] flex justify-center cursor-pointer rounded-full text-black ${
              currenTab === "my-vacations"
                ? "bg-[#3F8CFF] text-white font-bold transition-all"
                : ""
            }`}
          >
            My Vacations
          </button>
        </div>
        {currenTab === "project" ? (
          <div className="w-[400px] ml-[190px] flex gap-x-[24px] items-center">
            <button className="flex items-center justify-center  w-[48px] h-[48px] shadow bg-white border-2 focus:text-[#3F8CFF] border-white   rounded-[14px]  focus:border-[#3F8CFF]">
              <Icon.Filter />
            </button>

            <button className="w-[200px] cursor-pointer flex gap-x-4 bg-white shadow items-center  p-[13px_17px] rounded-[14px]">
              <span className="font-light text-[#0A1629] text-[16px]">
                Current Projects
              </span>
              <Icon.bottomIcon />
            </button>
          </div>
        ) : currenTab === "my-vacations" ? (
          <MyVacantion />
        ) : null}
      </div>

      {currenTab === "project" ? (
        <Profile />
      ) : currenTab === "my-vacations" ? (
        <MyVacantion />
      ) : (
        <Team />
      )}
    </>
  );
};

export default ProfilControl;
