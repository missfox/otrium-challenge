import React, { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode,
  className?: string,
  onClick: () => void,
}

function Button(props: ButtonProps) {
  const {
    children,
    className,
    onClick,
  } = props;

  return (
    <button type="button" onClick={onClick} className={className}>{children}</button>
  );
}

export default Button;
