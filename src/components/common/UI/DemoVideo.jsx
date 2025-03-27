const DemoVideo = ({ videoUrl }) => {
  return (
    <div className="py-4 ">
        <iframe
        className="w-[336px] sm:w-[560px] aspect-square"
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        ></iframe>
    </div>
  )
}
export default DemoVideo