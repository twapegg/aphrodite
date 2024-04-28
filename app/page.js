import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="w-full">
      <NavBar bg="transparent" />
      <section className="relative max-w-screen h-screen">
        <video
          src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/RXUtM83zw0_HD.mp4"
          frameBorder="0"
          allowFullScreen
          muted
          loop
          autoPlay
          width={"100%"}
          height={"100%"}
          className="absolute inset-0 w-full h-full object-cover z-1"
        />
      </section>
    </div>
  );
}
