import React, { MouseEventHandler } from "react";
import PulseLoader from "react-spinners/PulseLoader";

// Button input props
interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  label?: string;
  loading?: boolean;
  disabled?: boolean;
}

export default function Button({
  onClick,
  label,
  loading,
  disabled = false,
}: ButtonProps) {
  const defaultLabel = "Select";

  return (
    <button onClick={onClick} disabled={disabled || loading}>
      <div className="flex button p-4 rounded-lg bg-[#173F5F] text-white button">
        {loading ? (
          <PulseLoader color="#64B6AC" size={8} />
        ) : (
          <div className="font-bold text-xl">{label || defaultLabel}</div>
        )}
      </div>
    </button>
  );
}
