import { useState } from "react";
import "../../assets/styles/input.css";
import Input from "../ui/Input";
import InputMask from "../ui/input-mask";
import Otpinput from "../ui/otp-input";
import Select from "../ui/Select";
const Step2 = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className="">
      <form className="w-full flex flex-col gap-y-[31px] mt-[30px]">
        <Select
          label="Why will you use the service?"
          placeholder="Work"
          selectClassName="w-full"
        />
        <Select
          label="What describes you best?"
          placeholder="Business Owner"
          selectClassName="w-full"
        />
        <div className="flex mb-[155px]">
          <label className="input-label mr-[66px]">What describes you best?</label>
          <div className="flex gap-x-2 mr-[35px]">
            <input type="radio" />
            <label htmlFor="">Yes</label>
          </div>
          <div className="flex gap-x-2">
            <input type="radio" />
            <label htmlFor="">No</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step2;
