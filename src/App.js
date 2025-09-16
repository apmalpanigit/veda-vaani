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
    </div>
  );
}

export default App;
