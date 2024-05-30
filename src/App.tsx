import { v4 as uuid } from "uuid";
import { useState, type ChangeEvent, type FormEvent } from "react";
import ProductCard from "./components/ProductCard";
import ButtonComponent from "./components/ui/ButtonComponent";
import Modal from "./components/ui/Modal";
import { Category, ProductList, colors, formInputList } from "./data";
import InputComponent from "./components/ui/InputComponent";
import type { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
import SelectMenu from "./components/ui/SelectMenu";
import type { TProductNames } from "./types";
function App() {
  // Default State values
  const defaultProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };

  // ---  States ---- //
  const [data, setData] = useState(ProductList);
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProduct] = useState<IProduct>(defaultProduct);
  const [productToEdit, setProductToEdit] = useState<IProduct>(defaultProduct);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [tempColor, setTempColor] = useState<string[]>([]);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  console.log("Product to edit", productToEdit);

  const [selected, setSelected] = useState(Category[0]);

  // ---  States ---- //

  //* ---  Handlers ---- *//

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setProduct({ ...products, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setProductToEdit({ ...productToEdit, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const onCancel = () => {
    setProduct(defaultProduct);
    setIsOpen(false);
  };
  const onEditCancel = () => {
    setProduct(defaultProduct);
    setIsEditOpen(false);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const errors = productValidation(products);
    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    setErrors(errors);
    if (!hasErrorMsg) {
      return;
    }
    setData((prev) => [
      { ...products, id: uuid(), colors: tempColor, category: selected },
      ...prev,
    ]);
    setProduct(defaultProduct);
    setTempColor([]);
    setIsOpen(false);
  };
  const submitEditHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const errors = productValidation(productToEdit);
    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    setErrors(errors);
    if (!hasErrorMsg) {
      return;
    }
    setProductToEdit(defaultProduct);
    setTempColor([]);
    setIsOpen(false);
  };

  function openModal() {
    setIsOpen(true);
  }

  const closeModal = (): void => {
    setIsOpen(false);
  };
  function openEditModal() {
    setIsEditOpen(true);
  }

  const closeEditModal = (): void => {
    setIsEditOpen(false);
  };

  //* -----  Rendering ----- *//
  const renderFormInputList = formInputList.map((input) => (
    <div key={input.name} className="flex flex-col ">
      <label className="text-gray-700 font-medium" htmlFor={input.id}>
        {input.label}
      </label>
      <InputComponent
        onChange={onChangeHandler}
        type={input.type}
        id={input.id}
        name={input.name}
        value={products[input.name]}
      />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

  const renderCircleColor = colors.map((ele) => (
    <CircleColor
      key={ele}
      color={ele}
      onClick={() => {
        //** Very important syntax //
        if (tempColor.includes(ele)) {
          setTempColor((prev) => prev.filter((item) => item !== ele));
          return;
        }
        setTempColor((prev) => [...prev, ele]);
      }}
    />
  ));

  const renderList = data.map((product) => (
    <ProductCard
      openEditModal={openEditModal}
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
    />
  ));

  const renderProductEditWithErrorMsg = (
    id: string,
    label: string,
    name: TProductNames
  ) => {
    return (
      <div key={"title"} className="flex flex-col ">
        <label className="text-gray-700 font-medium" htmlFor={name}>
          {label}
        </label>
        <InputComponent
          onChange={onChangeEditHandler}
          type={"text"}
          id={id}
          name={name}
          value={productToEdit[name]}
        />
        <ErrorMessage msg={errors[name]} />
      </div>
    );
  };

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
      {/* Edit Product Modal */}
      <Modal
        title="Edit The Product"
        isOpen={isEditOpen}
        closeModal={closeEditModal}
      >
        <form className="space-y-2" onSubmit={submitEditHandler}>
          {renderProductEditWithErrorMsg("title", "Product Title", "title")}
          {renderProductEditWithErrorMsg(
            "description",
            "Product description",
            "description"
          )}
          {renderProductEditWithErrorMsg(
            "imageURL",
            "Product imageURL",
            "imageURL"
          )}
          {renderProductEditWithErrorMsg("price", "Product price", "price")}

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
              onClick={onEditCancel}
            >
              Cancel
            </ButtonComponent>
          </div>
        </form>
      </Modal>
      {/* ADD Product Modal */}
      <Modal title="Add A new Product" isOpen={isOpen} closeModal={closeModal}>
        <form className="space-y-2" onSubmit={submitHandler}>
          {renderFormInputList}
          <SelectMenu selected={selected} setSelected={setSelected} />
          <div className="flex space-x-1 items-center cursor-pointer mt-5 py-2  ">
            {renderCircleColor}
          </div>

          <div className="bg-red flex flex-wrap gap-1">
            {tempColor.map((ele) => (
              <span
                key={ele}
                className="py-1 px-2 cursor-pointer text-white rounded-md"
                style={{ background: ele }}
              >
                {ele}
              </span>
            ))}
          </div>

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
              onClick={onCancel}
            >
              Cancel
            </ButtonComponent>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
