import React from "react";
import { Handle, Position } from "reactflow";

const BaseNode = ({ title, inputs = [], outputs = [], children }) => {
  return (
    <div
      style={{
        minWidth: 220,
        padding: 12,
        borderRadius: 8,
        border: "1px solid #ddd",
        background: "#ffffff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        fontSize: 12,
      }}
    >
      <div
        style={{
          fontWeight: 600,
          marginBottom: 8,
          paddingBottom: 6,
          borderBottom: "1px solid #eee",
        }}
      >
        {title}
      </div>

      {inputs.map((input, index) => (
        <Handle
          key={input}
          type="target"
          position={Position.Left}
          id={input}
          style={{ top: 50 + index * 22, background: "#555" }}
        />
      ))}

      {outputs.map((output, index) => (
        <Handle
          key={output}
          type="source"
          position={Position.Right}
          id={output}
          style={{ top: 50 + index * 22, background: "#555" }}
        />
      ))}

      <div style={{ marginTop: 8 }}>{children}</div>
    </div>
  );
};

export default BaseNode;
