import { IImage } from "../interfaces";
const ImageComponent = ({ imageURL, altText, className }: IImage) => {
  return <img src={imageURL} alt={altText} className={`${className} `} />;
};

export default ImageComponent;
