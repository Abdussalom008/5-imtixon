import { useState } from "react";
import "../../assets/styles/input.css";
import Icon from "../ui/Icon";
import Input from "../ui/Input";
const Step4 = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className="w-full">
      <form className="w-full flex flex-col gap-y-[31px] mt-[30px]">
        <Input
          inputClassName="w-full"
          type="email"
          label="Member’s Email"
          placeholder="memberemail@gmail.com"
        />
        <span className="flex mt-[-10px] mb-[270px] font-semibold text-[16px] text-[#3F8CFF]">
          <Icon.PlusW/> Add Another Member
        </span>
      </form>
    </div>
  );
};

export default Step4;
