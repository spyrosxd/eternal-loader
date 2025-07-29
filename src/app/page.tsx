import LoadingIndicator from "@/components/loading-indicator";
import { LoadingText } from "@/components/loading-text";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <LoadingIndicator />
      <LoadingText />
    </section>
  );
}
