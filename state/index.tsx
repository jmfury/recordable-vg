import { createContext, useContext, useEffect, useState } from "react";

const RecordableAppContext = createContext({
  editor: {
    code: "",
    setCode: null,
  },
  animation: { animationState: null, setAnimationState: null },
  elements: null,
  setAst: null,
});

export function AppStateProvider({ children }) {
  const [code, setCode] = useState(`
  <svg height="400" width="450">
<path id="lineAB" d="M 100 350 l 150 -300" stroke="red" stroke-width="3" fill="none" />
  <path id="lineBC" d="M 250 50 l 150 300" stroke="red" stroke-width="3" fill="none" />
  <path d="M 175 200 l 150 0" stroke="green" stroke-width="3" fill="none" />
  <path d="M 100 350 q 150 -300 300 0" stroke="blue" stroke-width="5" fill="none" />
  <!-- Mark relevant points -->
  <g stroke="black" stroke-width="3" fill="black">
    <circle id="pointA" cx="100" cy="350" r="3" />
    <circle id="pointB" cx="250" cy="50" r="3" />
    <circle id="pointC" cx="400" cy="350" r="3" />
  </g>
  <!-- Label the points -->
  <g font-size="30" font-family="sans-serif" fill="black" stroke="none" text-anchor="middle">
    <text x="100" y="350" dx="-30">A</text>
    <text x="250" y="50" dy="-10">B</text>
    <text x="400" y="350" dx="30">C</text>
  </g>
  Sorry, your browser does not support inline SVG.
</svg>  
  `);
  const [animationState, setAnimationState] = useState(null);
  const [ast, setAst] = useState(null);
  const state = {
    editor: { code, setCode },
    animation: { animationState, setAnimationState },
    elements: ast,
    setAst,
  };

  useEffect(() => {
    const a = typeof window !== "undefined" ? new Animation() : null;
    if (a) {
      setAnimationState(a);
    }
  }, []);

  return (
    <RecordableAppContext.Provider value={state}>
      {children}
    </RecordableAppContext.Provider>
  );
}

const useAppState = () => useContext(RecordableAppContext);

export { RecordableAppContext, useAppState };
