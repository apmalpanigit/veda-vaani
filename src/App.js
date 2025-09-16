import { useState } from "react";
import Home from "./pages/Home";
import SubCategory from "./pages/SubCategory";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="App">
      {selectedCategory ? (
        <SubCategory
          category={selectedCategory}
          onBack={() => setSelectedCategory(null)}
        />
      ) : (
        <Home onSelectCategory={(cat) => setSelectedCategory(cat)} />
      )}

      {!selectedCategory && (
        <div className="flex justify-center">
          <button
            className="mb-8 py-3 px-6 rounded-lg bg-indigo-700 text-white font-semibold shadow-lg"
            onClick={() => alert("Continue clicked")}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
