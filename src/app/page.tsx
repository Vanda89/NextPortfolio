// Page home

import Banner from "@/components/home/Banner";
import ProjectsSection from "@/components/Projects/ProjectsSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 my-28">
      <Banner />
      <ProjectsSection />
    </div>
  );
}
