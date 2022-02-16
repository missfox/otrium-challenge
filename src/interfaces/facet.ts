export interface CategoryItem {
  id: string,
  count: number,
  parent: string,
  name: string,
}

export interface FacetItem extends CategoryItem {
  checked: boolean,
  expanded: boolean,
  children: string[];
}

export type FacetDictionary = Map<string, FacetItem>;
