// @ts-ignore
import { products, categories } from "../../../database/db.js";

interface Products{
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  image: string;
  onSale: boolean;
  categoryId: string;
};

interface args {
  id: string;
}

export const Query = {
  products: (_: any, __: any, { products }: { products: Products[] }) => products,
  product: (_: any, { id }: args, { dataSources: { products } }: any) => {
    const productId: string = id;

    return products.find((product: any) => productId === product.id);
  },
  categories: () => categories,
  category: (parent: any, { id }: args, context: any) => {
    return categories.find((category) => id === category.id);
  },
};
