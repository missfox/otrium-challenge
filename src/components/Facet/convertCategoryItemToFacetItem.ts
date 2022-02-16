import { CategoryItem, FacetDictionary } from '../../interfaces/facet';
import { rootNodeId } from './constants';

function convertCategoryItemToFacetItem(items: CategoryItem[]): FacetDictionary {
  // Create a hash table
  const result = new Map();

  // Return an empty map if there are no items
  if (items.length === 0) {
    return result;
  }

  // Manually set the root node
  result.set(rootNodeId, { children: [] });

  // Map the nodes of the array to a Map structure
  items.forEach((item) => {
    result.set(item.id, {
      ...item,
      checked: false,
      expanded: false,
      children: [],
    });
  });

  // Add children to parent items
  items.forEach((item) => {
    if (result.has(item.parent)) {
      result.get(item.parent).children.push(item.id);
    }
  });

  // Return hash table
  return result;
}

export default convertCategoryItemToFacetItem;
