import { useAppState } from "../state";

export default function StateViewer() {
  const state = useAppState();
  return (
    <pre>
      <code>{JSON.stringify(state, null, 2)}</code>
    </pre>
  );
}
