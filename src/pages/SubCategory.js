import BubbleGrid from "../components/BubbleGrid";

export default function SubCategory({ category, onBack }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <h1 className="text-3xl font-bold text-center mt-6">
        {category.category}
      </h1>
      <BubbleGrid
        items={category.subcategories}
        onSelect={(sub) => alert(`You selected ${sub}`)}
      />

      <button
        onClick={onBack}
        className="m-6 py-3 px-6 rounded-lg bg-indigo-600 text-white font-semibold shadow-lg"
      >
        Back
      </button>
    </div>
  );
}
