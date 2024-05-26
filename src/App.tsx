import { useState } from "react";
import ProductCard from "./components/ProductCard";
import ButtonComponent from "./components/ui/ButtonComponent";
import Modal from "./components/ui/Modal";
import { ProductList, formInputList } from "./data";
import InputComponent from "./components/ui/InputComponent";
function App() {
  // ---  States ---- //
  const [isOpen, setIsOpen] = useState(false);
  // ---  States ---- //

  // ---  Handlers ---- //

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  //  Rendering //
  const renderFormInputList = formInputList.map((input) => (
    <div key={input.name} className="flex flex-col ">
      <label className="text-gray-700 font-medium" htmlFor={input.id}>
        {input.label}
      </label>
      <InputComponent type={input.type} id={input.id} name={input.name} />
    </div>
  ));
  const renderList = ProductList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    // Mobile First
    <main className="container">
      <div className="my-5 flex items-center justify-between m-5">
        <h1 className="text-lg font-bold text-indigo-600 ">Product Builder</h1>
        <ButtonComponent
          onClick={openModal}
          className="bg-blue-700 hover:bg-blue-800 "
        >
          Add New Product
        </ButtonComponent>
      </div>
      <section className="m-5  grid gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-4">
        {renderList}
      </section>

      <Modal title="Add A new Product" isOpen={isOpen} closeModal={closeModal}>
        <div className="space-y-2">
          {renderFormInputList}
          <div className="flex items-center justify-between gap-2 mt-2">
            <ButtonComponent
              className="bg-blue-700 hover:bg-blue-800"
              width="w-full"
            >
              Submit
            </ButtonComponent>
            <ButtonComponent
              className="bg-gray-400 hover:bg-gray-500"
              width="w-full"
            >
              Cancel
            </ButtonComponent>
          </div>
        </div>
      </Modal>
    </main>
  );
}

export default App;
