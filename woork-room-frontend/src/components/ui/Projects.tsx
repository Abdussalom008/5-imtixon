import Icon from "./Icon";
import ava from "../../assets/icons/photo.svg";
interface ProjectProps {
  id: string;
  job: string;
  img: string;
  data: string;
  tasks: number;
  activeTasks: number;
  assigness: string;
  datatittle: string;
}

const Projects = ({
  id,
  img,
  job,
  data,
  tasks,
  activeTasks,
  assigness,
  datatittle,
  ...props
}: ProjectProps) => {
  return (
    <>
      <div className="  bg-white shadow rounded-[24px]  flex py-[25px] pl-[24px] pr-[44px]">
        <div className="max-w-[100%] w-[50%] flex flex-col gap-y-[23px] pr-[44px]">
          <div className="flex gap-x-[17px] ">
            <img src={img} alt="avatar" />
            <div className=" flex flex-col gap-y-[3px]">
              <h4 className="text-[#91929E] text-[13px] font-light">{id}</h4>
              <span className="text-[17px] font-bold text-[#0A1629] ">
                {job}
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="flex gap-x-1.5 text-[#7D8592] text-[13px] items-center">
              <Icon.Calendar /> {data}
            </span>
            <div className="flex gap-x-[3px]">
              <Icon.topArrowIcon />
              <span className="text-[#FFBD21] text-[14px] font-bold">
                Medium
              </span>
            </div>
          </div>
        </div>
        <span className="bg-[#E4E6E8] w-[1px] "></span>
        <div className="w-[50%] max-w-[100%] pl-[44px]">
          <h4 className="pb-[15px] font-bold text-[#0A1629] text-[16px]">
            {datatittle}
          </h4>
          <div className="flex justify-between">
            <div className="flex flex-col gap-y-[3px]">
              <span className="text-[13px] text-[#91929E] font-light">
                All Tasks
              </span>
              <span className="text-[17px] text-[#0A1629] font-bold">
                {tasks}
              </span>
            </div>
            <div className="flex flex-col gap-y-[3px]">
              <span className="text-[13px] text-[#91929E] font-light">
                Active Tasks
              </span>
              <span className="text-[17px] text-[#0A1629] font-bold">
                {activeTasks}
              </span>
            </div>
            <div className="">
              <span className="flex flex-col gap-y-[3px] text-[13px] text-[#91929E] font-light">
                Assignees
                <div className="flex relative right-3">
                  <img src={ava} className=" " />
                  <img src={ava} className="absolute left-5" />
                  <img src={ava} className="absolute left-10" />
                  <span className="w-[27px] h-[27px] flex items-center text-white font-bold top-0.5 px-1 rounded-full bg-[#3F8CFF] absolute left-15">
                    +2
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
