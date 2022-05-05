import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <ContainerBlock
      title="Usman Naeem - Developer, Designer, Blogger"
      description="Developer, Blogger, Programmer, Designer"
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode />
    </ContainerBlock>
  );
}
