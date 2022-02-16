import cloneDeep from 'lodash/cloneDeep';
import React from 'react';
import { FacetDictionary, FacetItem } from '../../interfaces/facet';
import { rootNodeId } from './constants';
import FacetItems from './FacetItems';

interface FacetParams {
  items: FacetDictionary;
  onItemsChange: (updatedItems: FacetDictionary) => void;
}

function Facet(props: FacetParams) {
  const { items, onItemsChange } = props;

  // Recursive function to traverse a dictionary and get all children for a given parent node
  const getAllChildren = (parent: FacetItem, childrenIds: string[]): string[] => {
    // If node has no children, then exit
    if (parent.children.length === 0) {
      return childrenIds;
    }
    // Else check all children
    parent.children.forEach((childId: string) => {
      // Add child id to the result array
      childrenIds.push(childId);
      // Call the function again and get all children for given children element
      getAllChildren(items.get(childId) as FacetItem, childrenIds);
    });

    return childrenIds;
  };

  const handleCheck = (itemId: string, checked: boolean): void => {
    // Get an item by id and change its checked value with the received checked parameter
    const item = items.get(itemId) as FacetItem;
    item.checked = checked;
    // Get all children from checked parent node
    const checkedChildren: string[] = getAllChildren(item, []);

    // Make all children checked
    checkedChildren.forEach((childId: string) => {
      const child = items.get(childId) as FacetItem;
      child.checked = checked;
    });
    // Clone options and update state
    const clonedOptions = cloneDeep(items);
    onItemsChange(clonedOptions);
  };

  const handleClick = (itemId: string, expanded: boolean): void => {
    // Get an item by id and change its expanded value with the received expanded parameter
    const item = items.get(itemId) as FacetItem;
    item.expanded = expanded;
    // Clone options and update state
    const clonedOptions = cloneDeep(items);
    onItemsChange(clonedOptions);
  };

  return items.has(rootNodeId) ? (
    <div>
      <FacetItems
        childItems={(items.get(rootNodeId) as FacetItem).children}
        checked={false}
        expanded={false}
        allItems={items}
        onCheck={handleCheck}
        onClick={handleClick}
      />
    </div>
  ) : null;
}

export default Facet;
