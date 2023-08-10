interface Category {
  id: string;
  name: string;
}

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
  categoryId: string;
}
[];

export const Product = {
  category: (
    parent: product,
    { id }: args,
    { categories }: { categories: Category[] }
  ) => {
    const categoryId: string = parent.categoryId;
    return categories.find((category) => category.id === categoryId);
  },
};
