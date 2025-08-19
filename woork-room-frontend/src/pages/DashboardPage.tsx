import { NavLink } from "react-router-dom";
import Icon from "../components/ui/Icon";
import WorkloadCard from "../components/ui/WorkloadCard";
import Event from "../components/ui/Event";
import Projects from "../components/ui/Projects";
import Stream from "../components/ui/Stream";
import { useDashboard } from "../hooks/requests/useDashboard";

const DashboardPage = () => {
  const { data, isLoading, isError } = useDashboard();

  if (isLoading) return <p>Yuklanmoqda...</p>;
  if (isError) return <p>Xatolik yuz berdi!</p>;

  return (
    <div className="ml-[240px] pt-[50px] ">
      <span className="text-[#7D8592] text-[14px]">
        Welcome Back, {data.user?.name}!
      </span>

      <div className="flex justify-between items-center mt-[10px]">
        <h1 className="text-[35px] font-bold">Dashboard</h1>
        <div className="flex gap-x-2 text-[15px] bg-[#E6EDF5] p-[12px_15px] rounded-[14px]">
          <Icon.Calendar />
          {data.dateRange}
        </div>
      </div>

      <div className="flex justify-between">
        {/* Workload */}
        <div className="w-[795px] shadow bg-white rounded-[24px] mt-[28px]">
          <div className="flex justify-between items-center px-[30px] mb-[20px]">
            <h1 className="text-[22px] font-bold text-[#0A1629] pt-[28px]">
              Workload
            </h1>
            <button className="flex gap-x-1 text-[16px] text-[#3F8CFF] pt-[34px]">
              View All <Icon.rightIcon />
            </button>
          </div>
          <div className="px-[18px]">
            <div className="flex flex-col gap-y-[16px]">
              {data.workload?.map((userRow: any, idx: number) => (
                <div key={idx} className="flex gap-x-[16px]">
                  {userRow.map((user: any) => (
                    <WorkloadCard
                      key={user.id}
                      img={user.avatar}
                      button={user.level}
                      name={user.name}
                      job={user.position}
                      cardClassName="bg-[#F4F9FD]"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nearest Events */}
        <div className="w-[365px] h-[470px] bg-white shadow rounded-[24px] mt-[28px] px-[30px]">
          <div className="flex justify-between items-center">
            <h1 className="text-[22px] font-bold text-[#0A1629] pt-[28px]">
              Nearest Events
            </h1>
            <NavLink
              to={"/nearest-events"}
              className="flex gap-x-1 text-[16px] text-[#3F8CFF] pt-[31px]"
            >
              View All <Icon.rightIcon />
            </NavLink>
          </div>
          <div>
            {data.events?.map((event: any) => (
              <Event
                key={event.id}
                button="h4"
                h4={event.title}
                data={event.date}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        {/* Projects */}
        <div>
          <div className="w-[795px] flex justify-between items-center px-[30px] mb-[20px]">
            <h1 className="mt-[47px] text-[22px] font-bold text-[#0A1629]">
              Projects
            </h1>
            <NavLink
              to={"/projects"}
              className="flex gap-x-1 text-[16px] text-[#3F8CFF] mt-[52px]"
            >
              View All <Icon.rightIcon />
            </NavLink>
          </div>
          <div className="flex flex-col gap-y-5">
            {data.projects?.map((project: any) => (
              <Projects
                key={project.id}
                img={project.icon}
                id={project.code}
                job={project.name}
                data={project.createdAt}
                datatittle="Project Data"
                activeTasks={project.activeTasks}
                assigness={project.assigness}
                tasks={project.tasks}
              />
            ))}
          </div>
        </div>

        {/* Activity Stream */}
        <div className="w-[365px] px-[30px] bg-white rounded-[24px] shadow mt-[28px]">
          <h1 className="text-[22px] font-bold text-[#0A1629] pt-[28px] pb-[24px]">
            Activity Stream
          </h1>

          {data.activity?.map((item: any) => (
            <Stream
              key={item.id}
              ava={item.avatar}
              name={item.user}
              job={item.role}
              info={item.info}
              attached={item.attached}
            />
          ))}

          <div className="flex items-center justify-center text-[#3F8CFF] text-[17px]">
            View All
            <Icon.bottomIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
