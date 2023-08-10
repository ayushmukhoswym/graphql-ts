// @ts-ignore
import { products } from "../../../database/db.js";

interface args {
  id: string;
}

interface category {
  id: string;
  name: string;
}

export const Category = {
  products: (parent: category, { id }: args) => {
    const categoryId: string = parent.id;
    return products.filter((product) => product.categoryId === categoryId);
  },
};
