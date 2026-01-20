import React, { useState } from "react";
import BaseNode from "./BaseNode";

export const InputNode = ({ id, data }) => {
  const [value, setValue] = useState(data?.label || "");

  return (
    <BaseNode title="Input" outputs={["output"]}>
      <div>
        <label>Input Name:</label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter input"
        />
      </div>
    </BaseNode>
  );
};
