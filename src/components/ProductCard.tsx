import { useState } from "react";
import type { IProduct } from "../interfaces";
import { textSlicer } from "../utils/function";
import ImageComponent from "./ImageComponent";
import ButtonComponent from "./ui/ButtonComponent";
import Modal from "./ui/Modal";

interface IProps {
  product: IProduct;
}
const ProductCard = ({ product }: IProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  return (
    <div className="max-w-sm mx-auto md:max-w-lg border border-gray-500 p-2 rounded-lg my-2">
      <ImageComponent
        imageURL={product.imageUrl}
        altText={product.title}
        className="rounded-md mb-2"
      />
      <h3 className="text-lg">{textSlicer(product.title, 30)}</h3>
      <p className="text-gray-500 my-2 ">
        {textSlicer(product.description, 30)}
      </p>
      <div className="flex space-x-1 items-center cursor-pointer mt-3 ">
        <span className="w-5 h-5 block rounded-full bg-indigo-600 " />
        <span className="w-5 h-5 block rounded-full bg-red-600 " />
        <span className="w-5 h-5 block rounded-full bg-teal-600 " />
      </div>
      <div className="flex items-center justify-between my-2">
        <span className="text-indigo-700 ">${product.price}</span>
        <ImageComponent
          imageURL={product.imageUrl}
          altText={product.title}
          className="w-12 h-12 rounded-full border-2 object-center"
        />
      </div>
      <div className="flex items-center gap-2">
        <ButtonComponent
          onClick={() => {
            setModalTitle("Edit Product");
            setOpenModal(true);
          }}
          className="bg-blue-700"
          width="w-full"
        >
          Edit
        </ButtonComponent>
        <ButtonComponent
          onClick={() => {
            setModalTitle("Remove Product");
            setOpenModal(true);
          }}
          className="bg-red-700"
          width="w-full"
        >
          Remove
        </ButtonComponent>
      </div>
      <Modal open={openModal} setOpen={setOpenModal} title={modalTitle}>
        <div>
          <ButtonComponent className="bg-indigo-700 hover:bg-indigo-800 ">
            Add Product
          </ButtonComponent>
          <ButtonComponent className="bg-gray-500  hover:bg-gray-600 ">
            cancel
          </ButtonComponent>
        </div>
      </Modal>
    </div>
  );
};

export default ProductCard;
