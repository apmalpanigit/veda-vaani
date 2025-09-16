import { emotions } from "../data";
import BubbleGrid from "../components/BubbleGrid";

export default function Home({ onSelectCategory }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <h1 className="text-3xl font-bold text-center mt-6">Choose an Emotion</h1>
      <BubbleGrid items={emotions} onSelect={onSelectCategory} />
    </div>
  );
}
