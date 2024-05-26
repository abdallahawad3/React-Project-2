import type { IProduct } from "../interfaces";
import { textSlicer } from "../utils/function";
import ImageComponent from "./ImageComponent";
import ButtonComponent from "./ui/ButtonComponent";
interface IProps {
  product: IProduct;
}
const ProductCard = ({ product }: IProps) => {
  return (
    <div className="max-w-sm mx-auto md:max-w-lg border border-gray-500 p-2 rounded-lg my-2">
      <ImageComponent imageURL={product.imageUrl} altText={product.title} />
      <h3 className="text-lg mt-3">{textSlicer(product.title, 30)}</h3>
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
          className="w-12 h-12 rounded-full object-center"
        />
      </div>
      <div className="flex items-center gap-2">
        <ButtonComponent className="bg-blue-700" width="w-full">
          Edit
        </ButtonComponent>
        <ButtonComponent className="bg-red-700" width="w-full">
          Remove
        </ButtonComponent>
      </div>
    </div>
  );
};

export default ProductCard;
