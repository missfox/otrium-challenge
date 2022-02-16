import React, { useEffect, useState } from 'react';

import './App.css';
import convertCategoryItemToFacetItem from './components/Facet/convertCategoryItemToFacetItem';
import Facet from './components/Facet/Facet';
import { FacetDictionary } from './interfaces/facet';
import elements from './response';

function App() {
  const [items, setItems] = useState<FacetDictionary>(new Map());

  useEffect(() => {
    // Get all categories on app start
    Promise.resolve(elements).then((r) => {
      // Convert initial items to facet options
      const convertedItems = convertCategoryItemToFacetItem(r.data.categories);
      setItems(convertedItems);
    });
  }, []);

  const handleFacetItemsChange = (updateItems: FacetDictionary): void => {
    setItems(updateItems);
  };

  return (
    <div className="facet-wrapper">
      <Facet items={items} onItemsChange={handleFacetItemsChange} />
    </div>
  );
}

export default App;
