const VideoBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <video
        autoPlay
        loop
        muted
        className="object-cover w-full h-full opacity-80"
      >
        <source src="jujutsuKaisen.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;