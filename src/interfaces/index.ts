import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { TProductNames } from "../types";

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
  imageURL: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageURL:string;
  };
}


export interface IInputList {
  id: string;    
  name: TProductNames;    
  label: string;
  type: string;    
}

export interface ICategory {
  id: string;
  name: string;
  imageURL: string;
}