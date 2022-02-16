import React, { ReactNode } from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';

interface FaceButtonParams {
  id: string,
  name: string,
  children: ReactNode,
  checked: boolean,
  expanded: boolean,
  onClick: (id: string, expanded: boolean) => void,
  onCheck: (id: string, checked: boolean) => void,
}

function FacetButton(props: FaceButtonParams) {
  const {
    id, name, children, checked, expanded, onClick, onCheck,
  } = props;

  return (
    <div className="facet-button">
      <Checkbox
        onChange={() => onCheck(id, !checked)}
        name={name}
        id={id}
        showLabel={false}
        checked={checked}
      />
      <Button onClick={() => onClick(id, !expanded)} className={`button ${checked ? 'button_checked' : ''}`}>{children}</Button>
    </div>
  );
}

export default FacetButton;
