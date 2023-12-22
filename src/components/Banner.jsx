import { Link } from "react-router-dom";
import { Button } from "./ui/Button";

export const Banner = () => {
  return (
    <div className="w-full md:container mx-auto mt-0 md:mt-6 h-[300px] md:h-[500px] bg-[url('../../../bg-1.webp')] dark:bg-[url('../../../bg-3.jpg')] md:rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-center">
      {/* <div className="absolute inset-0 bg-black/30 z-10" /> */}
      <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 z-20">
        <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs dark:text-white">
          Streamlined Task Manager: Organize, Collaborate, Succeed!
        </div>
        <Link to="/dashboard">
          <Button size="lg">Let’s Explore</Button>
        </Link>
      </div>
    </div>
  );
};
