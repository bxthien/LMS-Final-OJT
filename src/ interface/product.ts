import { CategoryType } from "../pages/Categories/categories";

export interface ProductType {
  id: string;
  name: string;
  category: CategoryType;
  price: number;
  quantity: number;
  info?: Info;
}

interface Info {
  description: string;
  color: string[];
  size: string[];
  policy: string;
}
