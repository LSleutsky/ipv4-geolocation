import { Button as MaterialButton } from '@mui/material';

export default function Button({ className, disabled, label, onClick }) {
  return (
    <MaterialButton
      className={className}
      disabled={disabled}
      onClick={onClick}
      variant="contained"
    >
      {label}
    </MaterialButton>
  );
}
