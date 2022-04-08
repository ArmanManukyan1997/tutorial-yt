import React from "react";

export type Props = {
  id: string;
  name: string;
  value: string;
  label: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Checkboxes: React.FC<Props> = ({
  label,
  defaultChecked,
  disabled = false,
  ...props
}) => {
  return (
    <div className="a-checkbox">
      <label className="a-checkbox__label">
        <input
          className="a-checkbox__input"
          type="checkbox"
          defaultChecked={defaultChecked}
          disabled={disabled}
          {...props}
        />
        <span className="a-checkbox__frame">
        </span>
        <span className="a-checkbox__text">{label}</span>
      </label>
    </div>
  );
};

export default Checkboxes;
