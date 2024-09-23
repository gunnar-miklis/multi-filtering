export type FilterNames = 'roasts' | 'types' | 'flavours' | 'categories';

export type Filters = {
  [filterName in FilterNames]: string[];
};
