import MobileNav from "./UI/MobileNav";
import MobileHeader from "./UI/MobileHeader";
import MobileFooter from "./UI/MobileFooter";
import DemoVideo from "../common/UI/DemoVideo"
import Separator from "../common/UI/Separator";
import demoVideos from "../../data/demoVideos.json";

const MobileDemosPage = () => {
  return (
    <>
      <MobileHeader />
      <MobileNav />
      <main className="pt-12 w-screen">
        <section
          className="w-full flex flex-row flex-wrap justify-center gap-8"
          data-testid="demos-section"
        >
        <h1 className="text-3xl pr-16">Demod</h1>
        <Separator />
          {demoVideos.map((video, index) => (
            <DemoVideo key={index} videoUrl={video.videoUrl} />
          ))}
        </section>
        <Separator />
      </main>
      <MobileFooter />
    </>
  );
};
export default MobileDemosPage;
