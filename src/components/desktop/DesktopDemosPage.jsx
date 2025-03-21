import DesktopHeader from "./UI/DesktopHeader"
import DesktopFooter from "./UI/DesktopFooter"
import DemoVideo from "../common/UI/DemoVideo"
import Separator from "../common/UI/Separator"
import demoVideos from "../../data/demoVideos.json"

const DesktopDemosPage = () => {

  return (
    <>
      <DesktopHeader />
      <main className="pt-32 lg:pt-46 xl:pt-56 px-5 lg:px-15 xl:px-30 w-screen">
        <section className="w-full flex flex-row flex-wrap justify-center gap-12" data-testid="demos-section"
 >
          {
            demoVideos.map((video, index) => (
              <DemoVideo key={index} videoUrl={video.videoUrl} />
            ))
          }
        </section>
        <Separator />
      </main>
      <DesktopFooter />
    </>
  )
}
export default DesktopDemosPage