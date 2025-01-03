import React from 'react';

const Checkbox = ({ isChecked, onChange, isIndeterminate }) => (
  <input
    type="checkbox"
    checked={isChecked}
    onChange={onChange}
    ref={(ref) => {
      if (ref) ref.indeterminate = isIndeterminate;
    }}
  />
);

export default Checkbox;
