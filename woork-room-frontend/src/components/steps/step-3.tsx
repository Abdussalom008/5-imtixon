import { useState } from "react";
import "../../assets/styles/input.css";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";
const Step3 = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className="w-full">
      <form className="w-full flex flex-col gap-y-[31px] mt-[30px]">
        <Input
          inputClassName="w-full"
          type="email"
          label="Your Company’s Name"
          placeholder="Company’s Name"
        />
        <Select
          label="Business Direction"
          placeholder="IT and programming"
          selectClassName=""
        />
        <div className="flex flex-col justify-between gap-y-[7px]">
          <label className="input-label">How many people in your team?</label>
          <div className="flex mb-[11px] gap-x-3 ">
            <Button variant="small" className=" whitespace-nowrap">
              Only Me{" "}
            </Button>
            <Button variant="small" className=" whitespace-nowrap">
              2 - 5{" "}
            </Button>
            <Button variant="small" className=" whitespace-nowrap">
              6 - 10{" "}
            </Button>
            <Button variant="small" className=" whitespace-nowrap">
              11 - 20{" "}
            </Button>
          </div>
          <div className="flex gap-x-3  ">
            <Button variant="small" className=" whitespace-nowrap">
              21 - 40{" "}
            </Button>
            <Button variant="small" className=" whitespace-nowrap">
              41 - 50{" "}
            </Button>
            <Button variant="small" className=" whitespace-nowrap">
              51 - 100{" "}
            </Button>
            <Button variant="small" className=" whitespace-nowrap">
              101- 500
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step3;
