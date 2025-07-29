import LoadingBar from "@/components/loading-bar";
import LoadingIndicator from "@/components/loading-indicator";
import { LoadingText } from "@/components/loading-text";
import Timer from "@/components/timer";

export default function Home() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r bg-[linear-gradient(90deg,#a78bfa_0%,#f472b6_25%,#f87171_50%,#fb923c_75%,#fde68a_100%)] bg-[length:300%_300%] animate-hue-rotate">
        <div className="absolute top-4">
          <Timer />
        </div>
        <LoadingIndicator />
        <LoadingBar/>
        <LoadingText />
      </section>
    </>
  );
}
