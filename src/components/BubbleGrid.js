import Bubble from "./Bubble";

export default function BubbleGrid({ items, onSelect }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-6">
      {items.map((item, index) => (
        <Bubble
          key={index}
          label={item.category || item}
          color={item.color || "bg-gray-400"}
          onClick={() => onSelect(item)}
        />
      ))}
    </div>
  );
}
