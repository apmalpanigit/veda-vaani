import { emotions } from "../data";
import BubbleGrid from "../components/BubbleGrid";

export default function Home({ onSelectCategory }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <h1 className="text-3xl font-bold text-center mt-6">Choose an Emotion</h1>
      <BubbleGrid items={emotions} onSelect={onSelectCategory} />
      <button className="m-6 py-3 px-6 rounded-lg bg-indigo-600 text-white font-semibold shadow-lg">
        Made by Akshay Malpani
      </button>
    </div>
  );
}
