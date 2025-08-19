import img0 from "../assets/icons/Image.svg";
import Projects from "../components/ui/Projects";
import "../index.css";

const Profile = () => {
  return (
    <div className="ml-[240px] pt-[50px] relative">
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-5 w-[931px]  absolute bottom-[300px] right-[-13px] top-[110px]">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Projects
              img={img0}
              id="PN0001265"
              job="Medical App (iOS native)"
              data="Created Sep 12, 2020"
              datatittle="Project Data"
              activeTasks={2}
              assigness=""
              tasks={2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
