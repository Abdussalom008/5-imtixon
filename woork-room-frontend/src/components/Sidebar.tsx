import "../assets/styles/sidebar.css";
import Support from "../assets/icons/Support.svg";
import Icon from "./ui/Icon";
import { NavLink } from "react-router-dom";
import React from "react";
import { Modal } from "antd";
import Select from "../components/ui/Select";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

import img from "../assets/icons/illustration.svg";

const Sidebar: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);
  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <aside className=" w-[200px] bg-white rounded-[24px] shadow pt-[33px] fixed top-5 left-5 z-40">
      <div className="pb-[31px] pl-[24px]">
        <Icon.companyLogow />
      </div>
      <div className="pl-[15px] flex flex-col gap-y-1 ">
        <NavLink
          to="/"
          className="p-[8px_10px] rounded-[10px] w-[165px] text-[#7D8592] text-[15px] font-semibold flex gap-x-[15px]
          focus:bg-[#ebf3ff] focus:text-[#3F8CFF] 
          focus:[&>svg>path]:fill-[#3F8CFF]"
        >
          <Icon.Dashboard /> Dashboard
        </NavLink>

        <NavLink
          to={"/projects"}
          className="p-[8px_10px] focus:bg-[#ebf3ff] focus:text-[#3F8CFF] rounded-[10px] w-[165px] text-[#7D8592] text-[15px] font-semibold flex gap-x-[15px] focus:[&>svg>path]:fill-[#3F8CFF]  "
        >
          <Icon.Projects /> Projects
        </NavLink>
        <NavLink
          to={"/calendar"}
          className="p-[8px_10px] focus:bg-[#ebf3ff] focus:text-[#3F8CFF] rounded-[10px] w-[165px] text-[#7D8592] text-[15px] font-semibold flex gap-x-[15px] focus:[&>svg>path]:fill-[#3F8CFF]  "
        >
          <Icon.Calendar />
          Calendar
        </NavLink>
        <NavLink
          to={"/vacations"}
          className="p-[8px_10px] focus:bg-[#ebf3ff] focus:text-[#3F8CFF] rounded-[10px] w-[165px] text-[#7D8592] text-[15px] font-semibold flex gap-x-[15px] focus:[&>svg>path]:fill-[#3F8CFF]  "
        >
          <Icon.Vacations />
          Vacations
        </NavLink>
        <NavLink
          to={"/employees"}
          className="p-[8px_10px] focus:bg-[#ebf3ff] focus:text-[#3F8CFF] rounded-[10px] w-[165px] text-[#7D8592] text-[15px] font-semibold flex gap-x-[15px] focus:[&>svg>path]:fill-[#3F8CFF]  "
        >
          <Icon.Employees />
          Employees
        </NavLink>
        <NavLink
          to={"/messenger"}
          className="p-[8px_10px] focus:bg-[#ebf3ff] focus:text-[#3F8CFF] rounded-[10px] w-[165px] text-[#7D8592] text-[15px] font-semibold flex gap-x-[15px] focus:[&>svg>path]:fill-[#3F8CFF]  "
        >
          <Icon.Messenger />
          Messenger
        </NavLink>
        <NavLink
          to={"/info-portal"}
          className="p-[8px_10px]  focus:bg-[#ebf3ff] focus:text-[#3F8CFF] rounded-[10px] w-[165px] text-[#7D8592] text-[15px] font-semibold flex gap-x-[15px] focus:[&>svg>path]:fill-[#3F8CFF]  "
        >
          <Icon.InfoPortal />
          Info Portal
        </NavLink>
      </div>
      <button
        onClick={showLoading}
        className="flex text-white font-semibold text-[14px] items-center px-[15px] py-[3px] gap-x-1.5 rounded-[10px]   bg-[#3F8CFF] top-[82%] w-[106px]  z-10 h-[38.5px] left-[21.5%] absolute"
      >
        <Icon.message /> Support
      </button>
      <Modal
        className="px-[30px]"
        title={
          <p className="text-[22px] text-[#0A1629] font-bold">
            Need some Help?
          </p>
        }
        footer={
          <Button className="" variant="small">
            Send Request
          </Button>
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false) }
      >
        <img className="pb-[30px]" src={img} alt="" />
        <p className="font-light text-[#0A1629] text-[16px] pb-[30px]">
          Describe your question and our specialists will answer you within 24
          hours.
        </p>
        <Select
          label="Request Subject"
          placeholder="Technical difficulites"
          selectClassName="mb-[25px]"
        />
        <Input
          label="Description"
          placeholder="Add some description of the request"
          inputClassName="w-full  mb-[25px]"
          type=""
        />
      </Modal>
      <img
        width={155}
        src={Support}
        className="mt-[77px] pl-[15px] ml-[11px]  z-0 mb-[20px] relative "
        alt="Support"
      />
      <div className="flex gap-x-[16px] text-[#7D8592] text-[15px] pl-[24px] pb-7">
        <Icon.Logout /> <a href="/sign-up">Logout</a>
      </div>
    </aside>
  );
};

export default Sidebar;
