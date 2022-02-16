import React, { useMemo } from 'react';
import { FacetItem } from '../../interfaces/facet';
import FacetButton from './FacetButton';

interface FacetItemsParams {
  id?: string,
  name?: string,
  checked: boolean,
  expanded: boolean,
  childItems: string[],
  allItems: Map<string, FacetItem>,
  onCheck: (id: string, checked: boolean) => void,
  onClick: (id: string, expanded: boolean) => void,
}

// Recursively render facet items
function FacetItems(props: FacetItemsParams) {
  const {
    id,
    name,
    checked,
    expanded,
    childItems,
    allItems,
    onCheck,
    onClick,
  } = props;

  // If an item doesn't have id and name then it's the first level item
  const isFirstLevel = useMemo(() => !id && !name, [id, name]);

  return (
    <>
      {!isFirstLevel
        ? (
          <FacetButton
            onClick={onClick}
            id={id as string}
            name={name as string}
            onCheck={onCheck}
            checked={checked}
            expanded={expanded}
          >
            {name}
          </FacetButton>
        )
        : null}
      {childItems.map((childId) => {
        const {
          name: childName = '', children: innerChildItems, checked: childChecked, expanded: childExpanded,
        } = allItems.get(childId) as FacetItem;

        return (
          <div key={childId} className={`facet-items ${(expanded || isFirstLevel) ? 'facet-items_expanded' : ''}`}>
            <FacetItems
              id={childId}
              name={childName}
              checked={childChecked}
              expanded={childExpanded}
              allItems={allItems}
              childItems={innerChildItems}
              onCheck={onCheck}
              onClick={onClick}
            />
          </div>
        );
      })}
    </>
  );
}

FacetItems.defaultProps = {
  id: '',
  name: '',
};

export default FacetItems;
