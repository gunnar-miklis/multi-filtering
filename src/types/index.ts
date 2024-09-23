export type Filters = {
  roasts: string[];
  types: string[];
  flavours: string[];
  categories: string[];
};

export type FilterNames = keyof Filters;
