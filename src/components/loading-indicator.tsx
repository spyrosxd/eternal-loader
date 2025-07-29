export default function LoadingIndicator() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] text-3xl text-gray-700 pb-5">
      <div className="flex items-center justify-center animate-spin text-5xl">
        🐱<span className="ml-2">🌀</span>
      </div>
    </div>
  );
}
