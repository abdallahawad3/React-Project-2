import ProductCard from "./components/ProductCard";
import { ProductList } from "./data";

function App() {
  const renderList = ProductList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    // Mobile First
    <main className="container">
      <section className="m-5  grid gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-4">
        {renderList}
      </section>
    </main>
  );
}

export default App;
