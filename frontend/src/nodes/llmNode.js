import React from "react";
import BaseNode from "./BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      inputs={["system", "prompt"]}
      outputs={["response"]}
    >
      <div>
        <p>This is a LLM.</p>
      </div>
    </BaseNode>
  );
};
