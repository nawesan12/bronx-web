export default function Teaser() {
  return (
    <section className="my-11">
      <video className="w-full rounded-xl" preload="none" muted autoPlay loop>
        <source src="/videos/skyline.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
