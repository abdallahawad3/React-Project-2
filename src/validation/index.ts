/**
 * @typedef {Object} IProps
 * @property {string} title - The title of the product.
 * @property {string} description - The description of the product.
 * @property {string} imageUrl - The URL of the product's image.
 * @property {string} price - The price of the product.
 */

/**
 * Validates the product object.
 * 
 * @param {IProps} product - The product object to validate.
 * @returns {IProps} An object with validation error messages.
 * 
 * @example
 * const product = {
 *   title: "Example Product",
 *   description: "This is an example product.",
 *   imageUrl: "http://example.com/image.jpg",
 *   price: "19.99"
 * };
 * const validationErrors = productValidation(product);
 * console.log(validationErrors);
 */

interface IProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}

// ** productObject === validationObject(title,description,image,price) */
export const productValidation = ({...product}: IProps) => {
  // ** Return an object with the validation results */

  const imageRegex = /\b(?:https?|ftp|file):\/\/\S/;
  const valid = imageRegex.test(product.imageUrl);

  const errors: IProps = {description:"",imageUrl:"",price:"",title:""};

  if(!product.title.trim() || product.title.length < 10 || product.title.length > 80){
    errors.title = "Title must be between 10 and 80 characters";
  }

  if(!product.description.trim() || product.description.length < 10 || product.description.length > 200){
    errors.description = "Description must be between 10 and 200 characters";
  }

  if(!valid || !product.imageUrl.trim()){
    errors.imageUrl = "Invalid image url";
  }

  if(!product.price.trim() || isNaN(Number(product.price))){
    errors.price = "Invalid price";
  } 


  return errors;
}