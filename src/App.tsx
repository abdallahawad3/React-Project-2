import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { ProductList } from "./data";
import ButtonComponent from "./components/ui/ButtonComponent";

function App() {
  // States //
  const [isOpenModal, setIsOpenModal] = useState(false);

  const renderList = ProductList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    // Mobile First
    <main className="container">
      <div className=" mt-5 text-center">
        <ButtonComponent
          onClick={() => {
            setIsOpenModal(true);
          }}
          className="bg-indigo-700"
        >
          Add New Product
        </ButtonComponent>
      </div>
      <section className="m-5  grid gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-4">
        {renderList}
      </section>
      <Modal open={isOpenModal} setOpen={setIsOpenModal}>
        <div className="flex gap-2">
          <ButtonComponent
            className="bg-indigo-700 hover:bg-indigo-800 "
            width="w-full"
          >
            Add Product
          </ButtonComponent>
          <ButtonComponent
            className="bg-gray-500  hover:bg-gray-600 "
            width="w-full"
          >
            cancel
          </ButtonComponent>
        </div>
      </Modal>
    </main>
  );
}

export default App;
