import React from 'react';
import { faSquare } from '@fortawesome/free-regular-svg-icons/faSquare';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons/faCheckSquare';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CheckboxInterface {
  id: string,
  name: string,
  label?: string,
  checked?: boolean,
  showLabel?: boolean,
  onChange: () => void;
}

function Checkbox(props: CheckboxInterface) {
  const {
    id, name, label, checked, showLabel, onChange,
  } = props;
  return (
    <>
      <input className="checkbox-inner" type="checkbox" name={name} checked={checked} id={id} onChange={onChange} />
      <FontAwesomeIcon className="checkbox-icon" onClick={onChange} icon={checked ? faCheckSquare : faSquare} />
      {showLabel ? <label htmlFor={id}>{label}</label> : null}
    </>
  );
}

Checkbox.defaultProps = {
  checked: false,
  showLabel: true,
  label: '',
};

export default Checkbox;
