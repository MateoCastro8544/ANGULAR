import { CategoryModel } from "./category.model";

export interface ProductModel{
    title:string;
    price:number;
    description:string;
    images:string[];
    category:CategoryModel
}