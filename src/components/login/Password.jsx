import React from "react";

const PasswordInput = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label>Password:</label>
      <input
        type="password"
        className="form-control"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default PasswordInput;
