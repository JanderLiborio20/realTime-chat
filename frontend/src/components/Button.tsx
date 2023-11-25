import Button from '@mui/material/Button';
import React from 'react';

interface TailwindStyledButtonProps {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const TailwindStyledButton: React.FC<TailwindStyledButtonProps> = ({
  className,
  onClick,
  children,
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default TailwindStyledButton;
