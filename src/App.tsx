import { useState } from "react";
import CategoryPills from "./components/CategoryPills";
import { categories } from "./data/home";
import PageHeader from "./layouts/PageHeader";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <div>Sidebar</div>
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 bg-white z-10 pb-4">
            <CategoryPills
              selectedCategory={selectedCategory}
              categories={categories}
              onSelect={setSelectedCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
