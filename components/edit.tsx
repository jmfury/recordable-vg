// @TODO - Don't simply rip off: https://github.com/kitten/use-editable
//
import React, { useRef, useCallback } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { useEditable } from "use-editable";

const Edit = ({ code, setCode }) => {
  const editorRef = useRef(null);

  const onEditableChange = useCallback((code) => {
    setCode(code.slice(0, -1));
  }, []);

  useEditable(editorRef, onEditableChange, {
    disabled: false,
    indentation: 2,
  });

  return (
    <Highlight {...defaultProps} code={code} language="markup">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={style}
          ref={editorRef}
          spellCheck={false}
        >
          {tokens.map((line, i) => (
            <React.Fragment key={i}>
              {line
                .filter((token) => !token.empty)
                .map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              {"\n"}
            </React.Fragment>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Edit;
