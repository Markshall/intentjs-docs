"Use Client";
import React, { useEffect, useState } from "react";
import { highlightCode } from "./ShikiUtil";

const CodeSnippet = ({ childeren }) => {
  const [highlightedCode, setHighlightedCode] = useState("");

  useEffect(() => {
    (async () => {
      const highlighted = await highlightCode(
        childeren,
        "javascript",
        "material-theme-darker"
      );
      setHighlightedCode(highlighted);
    })();
  }, [childeren, "javascript", "material-theme-darker"]);

  return (
    <div>
      <code
        className="flex flex-wrap overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </div>
  );
};

export default CodeSnippet;
