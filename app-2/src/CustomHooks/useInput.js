import React, { useState } from "react";

let useInput = initialValue => {
  let [value, setValue] = useState(initialValue);

  let handleChange = e => {
    console.log("useInput hook firing", e.target.value);
    setValue(e.target.value);
  };

  return {
    value: value,
    onChange: handleChange
  };
};

export default useInput;
