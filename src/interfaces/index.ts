import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface IImage {
  imageURL: string;
  altText: string;
  className?: string;
}
//* - To Work with all Attributes that assign to element
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?:string; 
  width?:"w-full" | "w-fit";
}

export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageUrl:string;
  };
}


export interface IInputList {
  id: string;    
  name: string;    
  label: string;
  type: string;    
}