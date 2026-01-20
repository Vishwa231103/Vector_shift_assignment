import React, { useState, useRef, useEffect } from "react";
import BaseNode from "./BaseNode";

export const TextNode = ({ data }) => {
  const [text, setText] = useState(data?.text || "");
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  // Detect {{ variables }}
  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [...text.matchAll(regex)];
    const vars = [...new Set(matches.map((match) => match[1]))];
    setVariables(vars);
  }, [text]);

  return (
    <BaseNode title="Text" inputs={variables} outputs={["text"]}>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ resize: "none", overflow: "hidden" }}
        rows={1}
      />
    </BaseNode>
  );
};
