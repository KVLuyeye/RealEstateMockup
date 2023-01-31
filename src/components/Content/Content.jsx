import { AboutUsCard } from "../../assets/AboutUsCard";
import { ConvinceCard } from "../../assets/ConvinceCard";
import { IntroCard } from "../../assets/IntroCard";
import { StatsCard } from "../../assets/StatsCard";
import { ProjectCard } from "../../assets/ProjectCard";
import { TestiominalsCard } from "../../assets/TestimonialsCard";
import { InviteCard } from "../../assets/InviteCard";
import "./Content.scss";

const Content = () => {
  return (
    <>
      <IntroCard />
      <ConvinceCard />
      <StatsCard />
      <AboutUsCard />
      <ProjectCard />
      <TestiominalsCard />
      <InviteCard />
    </>
  );
};

export default Content;
