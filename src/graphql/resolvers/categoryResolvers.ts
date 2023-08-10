interface Products {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  image: string;
  onSale: boolean;
  categoryId: string;
}

interface args {
  id: string;
}

interface category {
  id: string;
  name: string;
}

export const Category = {
  products: (
    parent: category,
    { id }: args,
    { products }: { products: Products[] }
  ) => {
    const categoryId: string = parent.id;
    return products.filter((product) => product.categoryId === categoryId);
  },
};
