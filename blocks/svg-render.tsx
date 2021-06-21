import rehype2react from "rehype-react";
import React, { useEffect, useState } from "react";
import { useAppState } from "../state";
import rehype from "rehype";
import slug from "../lib/slugger";

const reactRehypeProcessor = rehype()
  .data("settings", { fragment: true })
  .use(slug)
  .use(rehype2react, {
    createElement: React.createElement,
    passNode: true,
    components: {
      g: GroupComponent,
      path: PathComponent,
    } as any,
  });

function GroupComponent({ id, children, ...props }) {
  return (
    <g {...props} id={id}>
      {children}
    </g>
  );
}

function PathComponent({ id, node, children, ...props }) {
  return (
    <path {...props} id={id}>
      {children}
    </path>
  );
}
export default function Svg() {
  const {
    editor: { code },
    setAst,
    // elements,
  } = useAppState();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setLoading(true);
    }
  }, [loading]);

  const ast = reactRehypeProcessor.parse(code);

  useEffect(() => {
    setAst(ast);
  }, [code]);

  const compiler = reactRehypeProcessor.runSync(ast);
  console.log({ compiler });
  // @TODO - Complete the render
  return <div id="svg-wrap"></div>;
}
