export interface CategoryProperty {
  id: number;
  name: string;
  category_id: number;
  total_amount: number;
}

export interface Category {
  id: number;
  category_name: string;
  properties: CategoryProperty[];
}

export interface CategoryResponse {
  success: boolean;
  adron_category: Category[];
}
