import Icon from "./Icon";
interface EventsProps {
  icon: string;
  job: string;
  data: string;
  clock: string;
}

const Events = ({ job, data, clock }: EventsProps) => {
  return (
    <>
      <div className=" px-[24px] h-[130px] shadow bg-white rounded-[24px] mt-[28px] flex justify-center items-center mb-[5px]  w-full ">
        <div className=" pl-[18px]   border-l-4 border-[#3F8CFF] flex flex-col gap-y-[25px] ">
          <div className="flex gap-x-[190px] py-[7px] items-center justify-center">
            <span className="flex  gap-x-3 text-[#0A1629] text-[16px] font-bold">
              <Icon.Employees />
              {job}
            </span>
            <span>
              <Icon.topArrowIcon />
            </span>
          </div>
          <div className="flex gap-x-[367px] ">
            <span className="text-[14px] font-light text-[#91929E]">
              {data}
            </span>
            <button className="flex gap-x-1 items-center font-bold bg-[#F4F9FD] rounded-[4px] text-[12px] text-[#6b7380] p-[2px] w-[48px] h-[23px] ">
              <Icon.Watch />
              h4
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
