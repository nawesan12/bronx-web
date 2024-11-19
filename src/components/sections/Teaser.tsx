export default function Teaser() {
  return (
    <section className="mb-11 relative z-40">
      <video
        className="min-w-screen rounded-xl"
        preload="none"
        muted
        autoPlay
        loop
      >
        <source src="/videos/skyline.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
