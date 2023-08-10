// @ts-ignore
import { categories } from "../../../database/db.js";

interface args {
  id: string;
}

interface product {
  id?: string;
  name?: string;
  description?: string;
  quantity?: number;
  price?: number;
  image?: string;
  onSale?: boolean;
  categoryId : string;
}
[];

export const Product = {
    category: (parent: product, { id }: args) => {
      const categoryId: string = parent.categoryId;
      return categories.find(category => category.id === categoryId); 
    }
  }