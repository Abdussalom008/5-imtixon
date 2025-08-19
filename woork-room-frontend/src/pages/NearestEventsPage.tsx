import { NavLink } from "react-router-dom";
import Button from "../components/ui/Button";
import Events from "../components/ui/Events";
import Icon from "../components/ui/Icon";
import "../index.css";

const NearestEventsPage = () => {
  return (
    <div className="ml-[240px] pt-[50px] pb-[30px]">
      <NavLink
        to={"/"}
        className="flex gap-x-1.5 text-[#3F8CFF] text-[16px] font-semibold"
      >
        <Icon.leftArrowIcon /> Back to Dashboard
      </NavLink>

      <div className=" flex justify-between  items-center mt-[10px]">
        <h1 className="text-[35px] font-bold ">Nearest Events</h1>
        <Button
          variant="small"
          className="flex  items-center gap-x-2 text-[15px] bg-[#E6EDF5] p-[12px_15px]  rounded-[14px]"
        >
          <Icon.PlusW />
          Add Events
        </Button>
      </div>
      <div className="flex gap-x-[30px] w-full">
        <div className="flex flex-col w-full">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Events
              clock="4h"
              data="Today | 6:00 PM"
              job="Presentation of the new department"
              icon=""
            />
          ))}
        </div>
        <div className="flex flex-col w-full">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Events
              clock="4h"
              data="Today | 6:00 PM"
              job="Presentation of the new department"
              icon=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearestEventsPage;
